window.onload = () => {
  const styleElement = document.createElement('style');
  styleElement.innerText =
    'html {' +
    'filter: invert(1) hue-rotate(180deg) !important;' +
    'transition: color 300ms, background-color 300ms !imporant;' +
    '}' +
    'html img {' +
    'filter: invert(1) hue-rotate(180deg) !important ' +
    '}';
  document.head.appendChild(styleElement);
  return styleElement;
};

// One Show Dark Mode: https://dev.to/akhilarjun/one-line-dark-mode-using-css-24li
// How to Inject CSS: https://www.30secondsofcode.org/js/s/inject-css
// Use Append Over Append Child: https://flexiple.com/javascript/javascript-appendchild/
// Style Type is Deprecated: https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement/type
