import React from 'react';

export default ({
  handleChange,
  handleEnter,
  inputValue,
  mutedWords,
  renderMutedWordList,
  warningText
}) => {
  return (
    <div className={'muted-word'}>
      <input
        className={'muted-word__input'}
        type={'text'}
        value={inputValue}
        onKeyPress={handleEnter}
        onChange={handleChange}
      />
      { warningText? 
        (<small className={'muted-word__warning'}>{warningText}</small>):
        null
      }
      <ul className={'muted-word__list'}>
        {renderMutedWordList(mutedWords)}
      </ul>
    </div>
  );
}