import React from 'react';
import { Trans } from 'react-i18next';

export default ({ word, deleteMutedWord }) => {
  return (
    <li className={'muted-word__word'}>
      <p>{word}</p>
      <button
        className={'muted-word__button'}
        onClick={() => deleteMutedWord(word)}
      >
        <Trans>Delete Button</Trans>
      </button>
    </li>
  );
}
