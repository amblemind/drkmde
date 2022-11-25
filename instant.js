window.onload = () => {
  // Create Style Element
  const styleElement = document.createElement('style');
  styleElement.setAttribute('id', 'theme-style');
  document.head.append(styleElement);
  const toggleStyle = document.getElementById('theme-style');

  // Create Toggle Button
  const btn = document.createElement('button');
  btn.innerHTML = '🌙';
  btn.style.background = 'black';
  btn.style.color = 'white';
  btn.style.border = 'none';
  btn.style.borderRadius = '100%';
  btn.style.height = '3rem';
  btn.style.width = '3rem';
  btn.style.padding = '0';
  btn.style.position = 'absolute';
  btn.style.top = '0';
  btn.style.right = '0';
  btn.style.margin = '2rem';
  btn.setAttribute('id', 'theme-toggle');
  document.body.append(btn);
  const toggle = document.getElementById('theme-toggle');

  // Add Toggle Dark Mode Feature
  toggle.addEventListener('click', function () {
    if (toggle.textContent === '🌙') {
      toggle.style.backgroundColor = 'white';
      toggle.innerHTML = '💡';
      toggleStyle.innerText =
        ':root {' +
        'filter: invert(1) hue-rotate(180deg) !important;' +
        'transition: color 300ms, background-color 300ms !imporant;' +
        '}' +
        'html img {' +
        'filter: invert(1) hue-rotate(180deg) !important ' +
        '}' +
        '#theme-toggle {' +
        'filter: invert(1) hue-rotate(180deg) !important ' +
        '}';
    } else {
      toggle.style.backgroundColor = 'black';
      toggle.innerHTML = '🌙';
      toggleStyle.innerText = '';
    }
  });
};

// One Show Dark Mode: https://dev.to/akhilarjun/one-line-dark-mode-using-css-24li
// How to Inject CSS: https://www.30secondsofcode.org/js/s/inject-css
// Use Append Over Append Child: https://flexiple.com/javascript/javascript-appendchild/
// Style Type is Deprecated: https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement/type
// Create button: https://sebhastian.com/javascript-create-button/
