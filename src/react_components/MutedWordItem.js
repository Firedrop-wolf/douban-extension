import React from 'react';

export default ({word, deleteMutedWord }) => {
  return (
    <li className={'muted-word__word'}>
      <p>{word}</p>
      <button
        className={'muted-word__button'}
        onClick={() => deleteMutedWord(word)}
      >
        Delete
      </button>
    </li>
  );
}
