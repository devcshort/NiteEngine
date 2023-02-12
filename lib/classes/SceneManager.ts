import _ from "lodash";
import { GameObject } from "./GameObject";
import { NiteEngine } from "./NiteEngine";

export type Scene = {
  name: string;
  gameObjects: GameObject[];
};

export class SceneManager {
  private scenes: Scene[];
  activeScene: number;
  engine: NiteEngine;

  constructor(engine: NiteEngine) {
    this.activeScene = 0;
    this.scenes = [];
    this.engine = engine;
  }

  getScene(sceneIdx: number) {
    return this.scenes[sceneIdx];
  }

  createScene(scene: Scene) {
    this.scenes = _.concat(this.scenes, scene);
  }
}
