import { Transform } from "./Transform";

export class GameObject {
  transform: Transform;

  constructor() {
    this.transform = new Transform();
  }

  render(_ctx: CanvasRenderingContext2D) {}
}
