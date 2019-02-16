import React from 'react';

export default ({
  handleChange,
  handleEnter,
  inputValue,
  mutedWords,
  renderMutedWordList
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
      <ul className={'muted-word__list'}>
        {renderMutedWordList(mutedWords)}
      </ul>
    </div>
  );
}