import 'babel-polyfill';
import Demo1 from './episode-1/main';
import Demo2 from './episode-2/main';

const main = document.querySelector('#main');
const sidebar = document.querySelector('#sidebar');

const components = {
  'demo1': Demo1,
  'demo2': Demo2,
};

let currentComponentName = 'demo1';

const linkClick = e => {
  currentComponentName = e.target.dataset.component;
  render();
};

const sidebarLinks = Object.keys(components).map( name => {
  const link = document.createElement('li');
  link.setAttribute('data-component', name);
  link.innerHTML = name;
  link.onclick = linkClick;
  return sidebar.appendChild(link);
});

function render() {
  components[currentComponentName]();
}

render();
