import { HiddenStatus as HiddenStatusReminder } from '../components';

import { containsText } from './';

function hideSingleStatus(word) {
  const statusItems = containsText('.new-status', word);
  (statusItems || []).forEach(status => {
    const cloneNode = HiddenStatusReminder.cloneNode(true);
    status.parentNode.replaceChild(cloneNode, status);
  });
};

export default function hideStatus(words) {
  words.forEach(word => hideSingleStatus(word));
};
