import "./normalize.css";
import "./styles.css";
import { GameObject, NiteEngine, Rectangle } from "../lib/main";

const Engine = new NiteEngine("#app", {
  rendererOptions: {
    height: "100vh",
    width: "100%",
    resolutionHeight: 1080,
    resolutionWidth: 1920,
  },
});

const myFirstGameObject = new GameObject();
myFirstGameObject.transform.position.x = 100;
myFirstGameObject.transform.position.y = 100;
myFirstGameObject.transform.size.w = 200;
myFirstGameObject.transform.size.h = 50;
myFirstGameObject.render = function (ctx: CanvasRenderingContext2D) {
  Rectangle(ctx, { x: 200, y: 100, w: 200, h: 50 });
};

Engine.sceneManager.createScene({
  name: "firstScene",
  gameObjects: [myFirstGameObject],
});

Engine.start();
