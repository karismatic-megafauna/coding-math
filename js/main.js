import 'babel-polyfill';
import { randomLines } from './episode-1/randomLines';
// TODO: rename sinAndCos to pendulumWave
import { sinAndCos } from './episode-2/sinAndCos';
import { growingCircle } from './episode-3/growingCircle';
import { circleOfCircles } from './episode-4/circleOfCircles';
import { bigBang } from './episode-8/bigBang';
import { fireWorks } from './episode-9/fireWorks';
import { ship } from './episode-10/ship';
import { orbit } from './episode-11/orbit';
import { bounceyBall } from './episode-12/bounceyBall';
import { volcano } from './episode-12/volcano';
import { friction } from './episode-13/friction';

const sidebar = document.querySelector('#sidebar');

const components = {
  'Random Lines': randomLines,
  'Pendulum Wave': sinAndCos,
  'Growing Circle': growingCircle,
  'Circle of Circles': circleOfCircles,
  'Big Bang': bigBang,
  'Fireworks': fireWorks,
  'Ship': ship,
  'Orbit': orbit,
  'Bouncy Ball': bounceyBall,
  'Volcano': volcano,
  'Friction': friction,
};

let currentComponentName = 'Sin and Cos';

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
