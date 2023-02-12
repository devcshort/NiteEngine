import { SceneManager } from "./SceneManager";

export type RendererOptions = {
  width?: string;
  height?: string;
  resolutionWidth?: number;
  resolutionHeight?: number;
};

export class Renderer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  sceneManager: SceneManager;

  constructor(sceneManager: SceneManager, options?: RendererOptions) {
    this.canvas = document.createElement("canvas");
    this.canvas.style.display = "block";

    if (options?.height) this.canvas.style.height = options.height;
    if (options?.width) this.canvas.style.width = options.width;
    if (options?.resolutionHeight)
      this.canvas.height = options.resolutionHeight;
    if (options?.resolutionWidth) this.canvas.width = options.resolutionWidth;

    this.sceneManager = sceneManager;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const scene = this.sceneManager.getScene(this.sceneManager.activeScene);

    for (const go of scene.gameObjects) {
      go.render(this.ctx);
    }

    requestAnimationFrame(this.render.bind(this));
  }
}
