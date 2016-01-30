import 'babel-polyfill';
import Demo1 from './episode-1/main';
import Demo2 from './episode-2/main';
import Demo3 from './episode-3/main';

const main = document.querySelector('#main');
const sidebar = document.querySelector('#sidebar');

let currentComponentName = 'demo1';

const components = {
  'demo1': Demo1,
  'demo2': Demo2,
  'demo3': Demo3,
};

function render() {
  components[currentComponentName]();
}

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


render();
