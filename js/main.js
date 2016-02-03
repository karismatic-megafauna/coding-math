import 'babel-polyfill';
import { randomLines } from './episode-1/index';
import { sinAndCos } from './episode-2/index';
import { growingCircle } from './episode-3/index';
import { circleOfCircles } from './episode-4/index';
import { pointAtMouse } from './episode-5/index';
import { vectorLib } from './episode-7/index';
import { bigBang } from './episode-8/index';
import { particleMove, fireWorks } from './episode-9/index';
import { ship } from './episode-10/index';
import { orbit } from './episode-11/index';

const sidebar = document.querySelector('#sidebar');

const components = {
  'Random Lines': randomLines,
  'Sin and Cos': sinAndCos,
  'Growing Circle': growingCircle,
  'Circle of Circles': circleOfCircles,
  'Point at mouse': pointAtMouse,
  'Vector Lib': vectorLib,
  'Big Bang': bigBang,
  'Particle Move': particleMove,
  'Fireworks': fireWorks,
  'Ship': ship,
  'Orbit': orbit,
};

let currentComponentName = 'Random Lines';

function getComponent(componentName) {
  return components[componentName];
}

function render() {
  const currentComponent = getComponent(currentComponentName);
  currentComponent.setUp();
}

function clearSidebar() {
  const children = Array.from(sidebar.childNodes);
  children.map(child => child.classList.remove('current'));
}

const linkClick = e => {
  clearSidebar();
  e.target.className += ' current';
  const prevComp = getComponent(currentComponentName);
  prevComp.tearDown();

  // Change component name
  currentComponentName = e.target.dataset.component;
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
