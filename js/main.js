import 'babel-polyfill';
import { randomLines } from './episode-1/main';
import { sinAndCos } from './episode-2/main';
import { growingCircle } from './episode-3/main';
import { circleOfCircles } from './episode-4/main';
import { pointAtMouse } from './episode-5/main';
import { vectorLib } from './episode-7/main';
import { bigBang } from './episode-8/main';
import { particleMove, fireWorks } from './episode-9/main';

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
};

let currentComponentName = 'Growing Circle';

function getComponent(componentName) {
  return components[componentName];
}

function render() {
  const currentComponent = getComponent(currentComponentName);
  currentComponent.setUp();
}

const linkClick = e => {
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
