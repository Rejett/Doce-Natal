/** Verify distance between two points
 *
 * @param initialPoint
 * @param finalPoint
 *
 * @returns {number} with the distance between the points
 */
export const distance = (initialPoint, finalPoint) => {
  const distanceX = finalPoint.x - initialPoint.x;
  const distanceY = finalPoint.y - initialPoint.y;
  return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
};

/**
 * Verify if two circles are colliding
 *
 * @param {object} circle0
 * @param {object} circle1
 *
 * @returns {boolean} true if is colliding
 * */
export const circleCollision = (circle0, circle1) =>
  distance(circle0, circle1) <= circle0.radius + circle1.radius;

/**
 * Verify the x, y distance in cartesian plane
 *
 * @param {number} x0
 * @param {number} x1
 * @param {number} y0
 * @param {number} y1
 *
 * @returns {number} distance between each delta coordinate
 * */
export const distanceXY = (x0, y0, x1, y1) => {
  const distanceX = x1 - x0;
  const distanceY = y1 - y0;
  return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
};

/**
 * Verify if point is coliding with a circle
 * (used for mouse is over checking)
 *
 * @param {*} x
 * @param {*} y
 * @param {*} circle
 *
 * @returns {boolean} true if is colliding
 */
export const circlePointCollision = (x, y, circle) =>
  distanceXY(x, y, circle.x, circle.y) < circle.radius;

/**
 * Verify if point is coliding with a rectangle
 * (used for mouse is over checking)
 *
 * @param {*} x
 * @param {*} y
 * @param {*} rect
 *
 * @returns {boolean} true if is colliding
 */
export const rectPointCollision = (x, y, rect) =>
  inRange(x, rect.x, rect.x + rect.width) &&
  inRange(y, rect.y, rect.y + rect.height);

/**
 * Verify if the point is over then line
 * (used for mouse is over checking)
 *
 * @param {*} point
 * @param {*} line
 *
 * @returns {boolean} true if is colliding
 */
export const linePointCollision = (line, point) => {
  const { initialPoint, finalPoint } = line;
  const { x, y } = point;

  // get distance from the point to the two ends of the line
  const d1 = distanceXY(x, y, initialPoint.x, initialPoint.y);
  const d2 = distanceXY(x, y, finalPoint.x, finalPoint.y);

  // get the length of the line
  const lineLen = distanceXY(
    initialPoint.x,
    initialPoint.y,
    finalPoint.x,
    finalPoint.y
  );

  // since floats are so minutely accurate, add
  // a little buffer zone that will give collision
  const buffer = 0.3; // higher # = less accurate

  // if the two distances are equal to the line's length, the point is on the line
  // note we use the buffer here to give a range, rather than one #
  return d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer;
};

/**
 * Verify if a position is in determinated range
 *
 * @param {*} value
 * @param {*} min
 * @param {*} max
 *
 * @returns {boolean} true if is in range
 */
export const inRange = (value, min, max) =>
  value >= Math.min(min, max) && value <= Math.max(min, max);

/**
 * Verify if a body is intersecting with a determinated range
 *
 * @param {*} min0
 * @param {*} max0
 * @param {*} min1
 * @param {*} max1
 *
 * @returns {boolean} true if is in range
 */
export const rangeIntersect = (min0, max0, min1, max1) =>
  Math.max(min0, max0) >= Math.min(min1, max1) &&
  Math.min(min0, max0) <= Math.max(min1, max1);

/**
 * Verify collision between two rectangles (drawed by top/left base)
 * using range intersect method to verify the collision
 *
 * @param {*} r0
 * @param {*} r1
 *
 * @returns {boolean} true if rectangles is colliding
 */
export const rectCollision = (r0, r1) =>
  rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
  rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);

/**
 * Verify collision between a circle (drawed by center) and rectangles (drawed by top left)
 * (checked by the difference of x, y +- radius from circle
 * and the sides of rectangle based in x, x + width, y, y + width)
 *
 * @param {*} r0
 * @param {*} r1
 *
 * @returns {boolean} true if rectangles is colliding
 */
export const circleRectCollision = (circle, rect) =>
  circle.x + circle.radius > rect.x &&
  circle.x - circle.radius < rect.x + rect.width &&
  circle.y + circle.radius > rect.y &&
  circle.y - circle.radius < rect.y + rect.height;

/**
 * Verify collision between two lines (vectors)
 *
 * *all the parameters under this comment represent the coordinate points for lines to be tested
 * @param {*} x1
 * @param {*} y1
 * @param {*} x2
 * @param {*} y2
 * @param {*} x3
 * @param {*} y3
 * @param {*} x4
 * @param {*} y4
 *
 * @returns {object} point intersection or null case not intersect
 */
export const lineLineIntersectPoint = (x1, y1, x2, y2, x3, y3, x4, y4) => {
  // calculate the direction of the lines
  const uA =
    ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
  const uB =
    ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

  // if uA and uB are between 0-1, lines are colliding
  if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
    return {
      x: x1 + uA * (x2 - x1),
      y: y1 + uA * (y2 - y1),
    };
  }
  return null;
};

/**
 * Verify intersetion point between a line (vector) and a rect (drawed by top/left base).
 *
 * @param {*} line
 * @param {*} rect
 *
 * @returns {object} point with the intersect coordinate when intersection occurs and point with x = null and y = null when not intersect
 */
export const lineRectIntersectPoint = (line, rect) => {
  const { x1, y1, x2, y2 } = line;
  const { x, y, w, h } = rect;

  // check if the line has hit any of the rectangle's sides, using the lineLineIntersectPoint function below
  // if ANY of the above exists, the line has hit the rectangle, return the point of collision
  const left = lineLineIntersectPoint(x1, y1, x2, y2, x, y, x, y + h);
  if (left) {
    return left;
  }

  const right = lineLineIntersectPoint(x1, y1, x2, y2, x + w, y, x + w, y + h);
  if (right) {
    return right;
  }

  const top = lineLineIntersectPoint(x1, y1, x2, y2, x, y, x + w, y);
  if (top) {
    return top;
  }
  
  const bottom = lineLineIntersectPoint(x1, y1, x2, y2, x, y + h, x + w, y + h);
  if (bottom) {
    return bottom;
  }

  return { x: x2, y: y2 };
};

/**
 * Verify intersetion point between a line (vector) and a circle (drawed by center base).
 *
 * @param {*} line
 * @param {*} rect
 *
 * @returns {object} point with the intersect coordinate when intersection occurs and point with x = null and y = null when not intersect
 */
export const lineCircleIntersectOutputPoint = (line, circle) =>
  lineCircleIntersectPoint(line, circle, false);

/**
 * Verify intersetion point between a line (vector) and a circle (drawed by center base).
 *
 * @param {*} line
 * @param {*} rect
 *
 * @returns {object} point with the intersect coordinate when intersection occurs and point with x = null and y = null when not intersect
 */
export const lineCircleIntersectInputPoint = (line, circle) =>
  lineCircleIntersectPoint(line, circle, true);

/**
 * Verify intersetion point between a line (vector) and a circle (drawed by center base).
 *
 * @param {*} line
 * @param {*} rect
 * @param {*} positive determines if you want get the intersection on input circle or intersection on output circle (true = input, false = output)
 *
 * @returns {object} point with the intersect coordinate when intersection occurs and point with x = null and y = null when not intersect
 */
const lineCircleIntersectPoint = (line, circle, positive) => {
  let { x1, y1, x2, y2 } = line;

  const { x: cx, y: cy, r } = circle;

  x1 -= cx;
  y1 -= cy;
  x2 -= cx;
  y2 -= cy;

  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  const pow = (v) => Math.pow(v, 2);
  const sqrt = (v) => Math.sqrt(v);

  const a = pow(deltaX) + pow(deltaY);
  const b = 2 * (deltaX * x1 + deltaY * y1);
  const c = pow(x1) + pow(y1) - pow(r);

  const delta = pow(b) - 4 * a * c;
  if (delta < 0) return [];

  const t = positive
    ? (-b + sqrt(delta)) / (2 * a)
    : (-b - sqrt(delta)) / (2 * a);

  return { x: x1 + t * deltaX + cx, y: y1 + t * deltaY + cy };
};
