import 'babel-polyfill';
import { randomLines } from './episode-1/main';
import { sinAndCos } from './episode-2/main';
import { growingCircle } from './episode-3/main';
import { circleOfCircles } from './episode-4/main';

const sidebar = document.querySelector('#sidebar');

const components = {
  'Random Lines': randomLines,
  'Sin and Cos': sinAndCos,
  'Growing Circle': growingCircle,
  'Circle of Circles': circleOfCircles,
};

let currentSwitcher = { };
let currentComponentName = 'Random Lines';

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
  const link = document.createElement('div');
  link.setAttribute('data-component', name);
  link.innerHTML = name;
  link.onclick = linkClick;
  return sidebar.appendChild(link);
});

render();
