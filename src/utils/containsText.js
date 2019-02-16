export default function containsText(selector, text) {
  const elements = [...document.querySelectorAll(selector)];
  return elements.filter(element => RegExp(text).test(element.textContent));
}
