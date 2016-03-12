// components file
import 'babel-polyfill';
import { randomLines } from './episode-1/randomLines';
import { pendulumWave } from './episode-2/pendulumWave';
import { growingCircle } from './episode-3/growingCircle';
import { circleOfCircles } from './episode-4/circleOfCircles';
import { bigBang } from './episode-8/bigBang';
import { fireWorks } from './episode-9/fireWorks';
import { ship } from './episode-10/ship';
import { orbit } from './episode-11/orbit';
import { bounceyBall } from './episode-12/bounceyBall';
import { volcano } from './episode-12/volcano';
import { friction } from './episode-13/friction';
import { collisionDetection } from './episode-14/collisionDetection';
import { springOne, springTwo, springCollision } from './episode-15/springs';

const sidebar = document.querySelector('#sidebar');

// move to componentConfig file?
export default {
  'Random Lines': randomLines,
  'Pendulum Wave': pendulumWave,
  'Growing Circle': growingCircle,
  'Circle of Circles': circleOfCircles,
  'Big Bang': bigBang,
  'Fireworks': fireWorks,
  'Ship': ship,
  'Orbit': orbit,
  'Bouncy Ball': bounceyBall,
  'Volcano': volcano,
  'Friction': friction,
  'Collision Detection': collisionDetection,
  'Mouse Spring': springOne,
  'Mouse Spring 2': springTwo,
  'Spring Collision': springCollision,
};

