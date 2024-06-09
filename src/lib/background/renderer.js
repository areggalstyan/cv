const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

class Color {
  #red;
  #green;
  #blue;

  constructor(red, green, blue) {
    this.#red = red;
    this.#green = green;
    this.#blue = blue;
  }

  static random(min, max) {
    return new Color(
      randomFloat(min.#red, max.#red),
      randomFloat(min.#green, max.#green),
      randomFloat(min.#blue, max.#blue)
    );
  }

  toString() {
    return `rgb(${this.#red}, ${this.#green}, ${this.#blue})`;
  }
}

class Vector {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  static random(canvas) {
    return new Vector(
      randomFloat(0, canvas.width),
      randomFloat(0, canvas.height)
    );
  }

  static min(a, b) {
    return a.magnitude() < b.magnitude() ? a : b;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  add(that) {
    return new Vector(this.#x + that.#x, this.#y + that.#y);
  }

  subtract(that) {
    return new Vector(this.#x - that.#x, this.#y - that.#y);
  }

  multiply(scalar) {
    return new Vector(this.#x * scalar, this.#y * scalar);
  }

  magnitude() {
    return Math.sqrt(this.#x * this.#x + this.#y * this.#y);
  }

  normalize() {
    return this.multiply(1 / this.magnitude());
  }

  equals(that) {
    return (
      Math.abs(this.#x - that.#x) < Number.EPSILON &&
      Math.abs(this.#y - that.y) < Number.EPSILON
    );
  }
}

class Polygon {
  static #MIN_N = 3;
  static #MAX_N = 9;
  static #MIN_RADIUS = 20;
  static #MAX_RADIUS = 50;
  static #MIN_COLOR = new Color(210, 218, 225);
  static #MAX_COLOR = new Color(230, 238, 245);
  static #MIN_ROTATION = 0;
  static #MAX_ROTATION = 120;
  static #MIN_SPEED = 0.25;
  static #MAX_SPEED = 0.75;
  static #MIN_ROTATION_SPEED = -0.5;
  static #MAX_ROTATION_SPEED = 0.5;

  #canvas;
  #ctx;
  #n = randomInt(Polygon.#MIN_N, Polygon.#MAX_N);
  #radius = randomFloat(Polygon.#MIN_RADIUS, Polygon.#MAX_RADIUS);
  #rotation = randomFloat(Polygon.#MIN_ROTATION, Polygon.#MAX_ROTATION);
  #color = Color.random(Polygon.#MIN_COLOR, Polygon.#MAX_COLOR);
  #speed = randomFloat(Polygon.#MIN_SPEED, Polygon.#MAX_SPEED);
  #rotationSpeed = randomFloat(
    Polygon.#MIN_ROTATION_SPEED,
    Polygon.#MAX_ROTATION_SPEED
  );
  #position;
  #destination;

  constructor(canvas, ctx) {
    this.#canvas = canvas;
    this.#ctx = ctx;
    this.#position = Vector.random(this.#canvas);
    this.#destination = Vector.random(this.#canvas);
  }

  draw() {
    this.#ctx.beginPath();
    const start = this.#calculateVertex(0);
    this.#ctx.moveTo(start.x, start.y);
    for (let i = 1; i < this.#n; i++) {
      const vertex = this.#calculateVertex(i);
      this.#ctx.lineTo(vertex.x, vertex.y);
    }
    this.#ctx.closePath();
    this.#ctx.strokeStyle = this.#color;
    this.#ctx.lineWidth = 2;
    this.#ctx.stroke();
    if (this.#position.equals(this.#destination)) {
      this.#destination = Vector.random(this.#canvas);
    }
    const difference = this.#destination.subtract(this.#position);
    this.#position = Vector.min(
      difference.normalize().multiply(this.#speed),
      difference
    ).add(this.#position);
    this.#rotation += this.#rotationSpeed;
  }

  #calculateVertex(k) {
    const angle = (((360 / this.#n) * k - this.#rotation) * Math.PI) / 180;
    return new Vector(
      this.#radius * Math.cos(angle),
      this.#radius * Math.sin(angle)
    ).add(this.#position);
  }
}

export default class Renderer {
  static #MIN_POLYGONS = 25;
  static #MAX_POLYGONS = 50;

  #canvas;
  #ctx;
  #polygons = [];

  constructor(canvas) {
    this.#canvas = canvas;
    this.#ctx = canvas.getContext('2d');
  }

  init() {
    this.resize();
    this.generatePolygons();
    requestAnimationFrame(() => this.render());
  }

  resize() {
    const devicePixelRatio = window.devicePixelRatio || 1;
    this.#canvas.width = window.innerWidth * devicePixelRatio;
    this.#canvas.height = window.innerHeight * devicePixelRatio;
  }

  generatePolygons() {
    const n = randomInt(Renderer.#MIN_POLYGONS, Renderer.#MAX_POLYGONS);
    for (let i = 0; i < n; i++) {
      this.#polygons[i] = new Polygon(this.#canvas, this.#ctx);
    }
  }

  render() {
    this.#ctx.fillStyle = '#f0f8ff';
    this.#ctx.fillRect(0, 0, this.#canvas.width, this.#canvas.height);
    this.#polygons.forEach(polygon => polygon.draw());
    requestAnimationFrame(() => this.render());
  }
}
