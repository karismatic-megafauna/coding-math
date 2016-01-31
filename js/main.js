import 'babel-polyfill';
import Demo1 from './episode-1/main';
import Demo2 from './episode-2/main';
import { growingCircle } from './episode-3/main';

const sidebar = document.querySelector('#sidebar');

const components = {
  'demo1': () => Demo1,
  'demo2': () => Demo2,
  'demo3': growingCircle,
};

let currentSwitcher = { };
let currentComponentName = 'demo1';

function getComponent(componentName) {
  return components[componentName];
}

function startComponent(componentName) {
  const currentComponent = getComponent(componentName);
  const switcher = { on: true };

  currentComponent(switcher)();
  currentSwitcher = switcher;
}

function render() {
  startComponent(currentComponentName);
}

const linkClick = e => {
  currentComponentName = e.target.dataset.component;
  currentSwitcher.on = false;
  render();
};

Object.keys(components).map(name => {
  const link = document.createElement('li');
  link.setAttribute('data-component', name);
  link.innerHTML = name;
  link.onclick = linkClick;
  return sidebar.appendChild(link);
});

render();
