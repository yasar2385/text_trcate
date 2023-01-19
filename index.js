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

const width = document.getElementById('width');
width.addEventListener('change', () => {
  document.querySelector(
    '.container'
  ).style.gridTemplateColumns = `${width.value}px repeat(5, auto)`;

  showAllSizes();
});

showAllSizes();
var OBJ_HTML = {
  HTML: {
    in: '',
    out: './',
    files: [
      'editor6.html',
      'index.html',
      'login.html',
      'validateurl.html',
      'validateurloup.html',
      'loginpubkit.html',
      'userdashboard.html',
      'dashboard.html',
      'editor6TrackView.html',
      'sandbox.html',
      'landsandbox.html',
    ],
  },
  SNIPPET_HTML: {
    in: 'snippet/',
    out: 'snippet/',
    files: ['doi.html', 'ErrorLog.html', 'sharedLink.html', 'autoupload.html'],
  },
  PLUGINS_HTML: {
    in: 'ckeditor/plugins/annotorious/',
    out: 'ckeditor/plugins/annotorious/',
    files: ['ImgAnnot.html'],
  },
};
async function rewrite() {
  const obj = {
    name: 'Jean-Luc Picard',
    rank: 'Captain',
  };

  // Prints "name Jean-Luc Picard" followed by "rank Captain"
  Object.keys(obj).forEach((key) => {
    //console.log(key, obj[key]);
  });
  // Prints "Jean-Luc Picard" followed by "Captain"
  Object.values(obj).forEach((val) => {
    //console.log(val);
  });
  Object.entries(obj).forEach((entry) => {
    const [key, value] = entry;
    console.log(key, value);
  });

  Array.from(Object.keys(OBJ_HTML)).forEach((ARR, index) => {
    var full_path = OBJ_HTML[ARR]['files'].map(
      (el) => OBJ_HTML[ARR]['in'] + el
    );
    let out_path = OBJ_HTML[ARR]['out'];
    // console.log(OBJ_HTML[ARR]['files']);
    console.log(full_path);
    // return src(full_path)
    //   .pipe(replace(/([v]{1})(\d+\.)(\d+\.)(\*|\d+\-\d+|\d+)/g, iVersion))
    //   .pipe(dest(`${path}`));
  });

  Object.entries(OBJ_HTML).forEach((FILES_ARRAY) => {
    const [key, FILE] = FILES_ARRAY;
    // console.log(FILE);
    var full_path = FILE.files.map((el) => FILE.in + el);
    // console.log(full_path);
    return src(full_path)
      .pipe(replace(/([v]{1})(\d+\.)(\d+\.)(\*|\d+\-\d+|\d+)/g, iVersion))
      .pipe(dest(`${FILE.out}`));
  });

  await Promise.resolve('some result');
}
rewrite();
