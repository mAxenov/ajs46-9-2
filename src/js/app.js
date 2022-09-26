export default class ArrayBufferConverter {
  constructor() {
    this.buffer = new ArrayBuffer();
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    return String.fromCharCode.apply(null, new Uint16Array(this.buffer));
  }
}
