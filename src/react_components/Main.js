/*global chrome*/
import React from 'react';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import { Trans } from 'react-i18next';

import { MutedWord, MutedWordItem } from './';

import { editMutedWords, getMutedWords } from '../services';
import { hideStatus } from '../utils';
import "../content.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        inputValue: '',
        mutedWords: [],
        warningText: '',
    };
  }

  componentDidMount() {
    getMutedWords((mutedWords) => {
      this.setState({
        mutedWords,
      })
    });
  }

  handleChange = e => {
    const inputValue = e.target.value;
    this.setState({ inputValue });
  }

  handleEnter = e => {
    const inputValue = e.target.value;
    if(!inputValue) return;

    if (e.key === 'Enter') {
      this.addMutedWord(inputValue);
    }
  }

  addMutedWord = (word) => {
    const oldWordList = this.state.mutedWords;
    if (!oldWordList.includes(word)) {
      const wordList = [...oldWordList, word];
      editMutedWords(wordList, (wordList) => {
        hideStatus(wordList);
        this.setState({ mutedWords: wordList, inputValue: ''});

        console.log(`${word} is saved to your muted word bank.`);
      });
    } else {
      this.setState({ warningText: `${word} has existed in your muted word bank.`});
    }
  }

  deleteMutedWord = (wordToDelete) => {
    const wordList = this.state.mutedWords.filter(word => word !== wordToDelete);
    editMutedWords(wordList, (wordList) => {
      this.setState({ mutedWords: wordList});

      console.log(`${wordToDelete} is removed from your muted word bank.`);
    });
  }

  renderMutedWordList = (wordList) => {
    return (wordList || []).map(word => (
      <MutedWordItem
        word={word}
        deleteMutedWord={this.deleteMutedWord}
      />
    ));
  }

  render() {
    return (
      <Frame head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")} ></link>]}> 
        <FrameContextConsumer>
        {
        // Callback is invoked with iframe's window and document instances
          ({document, window}) => {
          // Render Children
            return (
              <div className={'douban-extension'}>
                <h3>
                  <Trans>Extension Name</Trans>
                </h3>
                <MutedWord
                  handleChange={this.handleChange}
                  handleEnter={this.handleEnter}
                  inputValue={this.state.inputValue}
                  mutedWords={this.state.mutedWords}
                  renderMutedWordList={this.renderMutedWordList}
                  warningText={this.state.warningText}
                />
              </div>
            )
          }
        }
        </FrameContextConsumer>
      </Frame>
    )
  }
}

export default Main;
