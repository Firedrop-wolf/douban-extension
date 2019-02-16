/*global chrome*/
export default function editMutedWords(wordList, callback) {
  chrome.storage.sync.set({ muted_words: wordList }, () => callback(wordList));
}
