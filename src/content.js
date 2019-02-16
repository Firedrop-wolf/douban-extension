/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';

import { Main } from './react_components';
import { getMutedWords } from './services';
import { toggleDisplay, hideStatus } from './utils';

const app = document.createElement('div');
app.id = "douban-extension-root";

document.body.appendChild(app);
ReactDOM.render(<Main />, app);

app.style.display = "none";

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action") {
      toggleDisplay(app);
    }
  }
);

getMutedWords(hideStatus);
