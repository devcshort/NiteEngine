import { Renderer, RendererOptions } from "./Renderer";
import { AudioManager } from "./AudioManager";
import { SceneManager } from "./SceneManager";
import { InputManager } from "./InputManager";

export type NiteEngineOptions = {
  rendererOptions?: RendererOptions;
};

export class NiteEngine {
  renderer: Renderer;
  audioManager: AudioManager;
  sceneManager: SceneManager;
  inputManager: InputManager;

  constructor(target: string, options?: NiteEngineOptions) {
    this.audioManager = new AudioManager();
    this.sceneManager = new SceneManager(this);
    this.inputManager = new InputManager();
    this.renderer = new Renderer(this.sceneManager, options?.rendererOptions);

    // Add our renderer to the canvas
    const targetEl = document.querySelector(target);
    if (targetEl) targetEl.append(this.renderer.canvas);
  }

  start() {
    this.renderer.render();
  }
}
