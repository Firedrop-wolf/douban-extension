# douban-extension
A Douban extension that helps you mute tweets based on your selected muted word list.

## Installation
Before you start, make sure that you are using a Chrome browser. This is an extension currently only supporting Chrome browser.

1. Go to `https://github.com/lianliu/douban-extension`.
2. Click on a green button called 'Clone or download' on the right of the page, right below the overall summary section.
3. Click on Download ZIP to your local machine and unzip it.
4. Once step 3 is done, go to `chrome://extensions`, and turn on Developer mode.
5. Click on `Load unpackaged` and point it the `build` folder.
6. Now you should see the icon showing up on the menu bar.
7. Go to `www.douban.com` and click on the icon.
8. If you have any question regarding installation of this extension on your Chrome, you can file an issue at https://github.com/lianliu/douban-extension/issues, or find me at https://www.douban.com/people/John_316/. I'm more than happy to help.
 
## Development
Follow steps to ramp up your development.

1. `git clone https://github.com/lianliu/douban-extension.git && cd douban-extension`
2. `yarn`
3. Edit some code.
4. `yarn build`
5. Open your Chrome, go to `chrome://extensions`, and turn on Developer mode.
6. Click on `Load unpackaged` and point it the `build` folder.
7. Now you should see the icon showing up on the menu bar.
8. Go to `www.douban.com` and click on the icon.
9. Now you can see the UI. Enjoy!

## Issues/Bugs/Reports?
* https://github.com/lianliu/douban-extension/issues

## Changelog
`02/18/2019`
* UI improvement: don't allow duplicated word: will show a warning text instead.

`02/15/2019`
* Can add/remove muted words.
* Can mute your timeline based on your word bank.

## TODOS
1. Restore content after deleting muted word(now need to refresh)
2. Better UI for interaction
3. Add Tests (I hate writing tests but they're important)
4. Add Icon(so that it can be published to the store)
5. Support i18n
6. Add Options Page
7. Publish to Chrome Web Store

## Disclaimer
There is no warranty, expressed or implied, associated with this extension. Use at your own risk.

## License
[douban-extension](https://github.com/lianliu/douban-extension) are released under [MIT license](https://github.com/lianliu/douban-extension/blob/master/LICENSE) . Copyright (c) [22](https://www.douban.com/people/John_316/).
