/*global chrome*/

export default function getMutedWords(callback) {
  chrome.storage.sync.get(['muted_words'], (result) => {
    const mutedWords = result['muted_words']? result['muted_words']: [];
    callback(mutedWords);
  });
};
