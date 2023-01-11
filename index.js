// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Hide code snippet

function isEllipsisActive(e) {
  const temp = e.cloneNode(true);

  temp.style.position = 'fixed';
  temp.style.overflow = 'visible';
  temp.style.whiteSpace = 'nowrap';
  temp.style.visibility = 'hidden';

  e.parentElement.appendChild(temp);

  try {
    const fullWidth = temp.getBoundingClientRect().width;
    const displayWidth = e.getBoundingClientRect().width;

    return {
      offsetWidth: e.offsetWidth,
      scrollWidth: e.scrollWidth,
      fullWidth,
      displayWidth,
      truncated: fullWidth > displayWidth,
    };
  } finally {
    temp.remove();
  }
}

function showSize(element, props) {
  const offset = element.nextElementSibling;
  const scroll = offset.nextElementSibling;
  const display = scroll.nextElementSibling;
  const full = display.nextElementSibling;
  const truncated = full.nextElementSibling;

  offset.textContent = props.offsetWidth;
  scroll.textContent = props.scrollWidth;
  display.textContent = props.displayWidth;

  const fixed = props.fullWidth.toFixed(3);
  full.innerHTML = fixed.replace(/\.?0+$/, "<span class='invisible'>$&</span>");

  truncated.textContent = props.truncated ? '✔' : undefined;
}

function showAllSizes() {
  const query = '.container > .row:nth-child(n + 2) > *:first-child';
  for (const element of document.querySelectorAll(query)) {
    showSize(element, isEllipsisActive(element));
  }
}

document.addEventListener('readystatechange', () => {
  if (document.readyState !== 'complete') {
    return;
  }

  const width = document.getElementById('width');
  width.addEventListener('change', () => {
    document.querySelector(
      '.container'
    ).style.gridTemplateColumns = `${width.value}px repeat(5, auto)`;

    showAllSizes();
  });

  showAllSizes();
});
