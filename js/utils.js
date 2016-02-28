// Utility funcitons

// DEPRECATED
export function inRangeDep(min, max, valueMin, valueMax) {
  return valueMax > min && valueMin < max;
}

// Utils
// Mini 1
export function normalize(value, min, max) {
  return (value - min) / (max - min);
}

// Mini 2
export function lerp(norm, min, max) {
  return (max - min) * norm + min;
}

// Mini 3
export function map(value, sourceMin, sourceMax, destMin, destMax) {
  return lerp(normalize(value, sourceMin, sourceMax), destMin, destMax);
}

// Mini 4
export function clamp(value, min, max) {
  return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
}

// Mini 5
export function distance(p0, p1) {
  const dx = p1.x - p0.x;
  const dy = p1.y - p0.y;
  return Math.sqrt((dx * dx) + (dy * dy));
}

export function distanceXY(x0, y0, x1, y1) {
  const dx = x1 - x0;
  const dy = y1 - y0;
  return Math.sqrt((dx * dx) + (dy * dy));
}

// Mini 6
export function randomRange(min, max) {
  return min + Math.random() * (max - min);
}

export function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

// Mini 7
export function degreesToRads(degrees) {
  return degrees / (180 / Math.PI);
}

export function radsToDegrees(rads) {
  return rads * (180 / Math.PI);
}

// Mini 8
export function roundToPlaces(value, places) {
  const mult = Math.pow(10, places);
  return Math.round(value * mult) / mult;
}

export function roundNearest(value, nearest) {
  return Math.round(value / nearest) * nearest;
}

// Mini 9
export function randomDist(min, max, iterations) {
  let total = 0;
  for (let i = 0; i < iterations; i += 1) {
    total += randomRange(min, max);
  }
  return total / iterations;
}

// Collision Utils
export function circleCollision(c0, c1) {
  return distance(c0, c1) <= c0.radius + c1.radius;
}

export function circlePointCollision(x, y, circle) {
  return distanceXY(x, y, circle.x, circle.y) < circle.radius;
}

export function inRange(value, min, max) {
  return value >= Math.min(min, max) && value <= Math.max(min, max);
}

export function pointInRect(x, y, rect) {
  return inRange(x, rect.x, rect.x + rect.width) &&
         inRange(y, rect.y, rect.y + rect.height);
}

export function rangeIntersect(min0, max0, min1, max1) {
  return Math.max(min0, max0) >= Math.min(min1, max1) &&
         Math.min(min0, max0) <= Math.max(min1, max1);
}
export function rectIntersect(r0, r1) {
  return rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
         rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
}

// Misc
// not sure where this belongs
export function inBox(w, h, node) {
  const x = node.position.getX();
  const y = node.position.getY();
  const radius = node.radius;

  if (inRangeDep(0, w, x - radius, x + radius) &&
      inRangeDep(0, h, y - radius, y + radius)) {
    return true;
  }
  return false;
}

// not sure where this belongs
export function removeDeadParticles(particles, w, h) {
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const p = particles[i];

    if (!inBox(w, h, p)) {
      particles.splice(i, 1);
    }
  }
  return particles;
}
