import React from 'react';

export default ({word, deleteMutedWord }) => {
  return (
    <li className={'muted-word__word'}>
      <p>{word}</p>
      <button onClick={() => deleteMutedWord(word)}>Delete</button>
    </li>
  );
}
