export class Transform {
  position: {
    x: number;
    y: number;
  };

  rotation: {
    x: number;
    y: number;
  };

  size: {
    w: number;
    h: number;
  };

  constructor() {
    this.position = {
      x: 0,
      y: 0,
    };

    this.rotation = {
      x: 0,
      y: 0,
    };

    this.size = {
      w: 0,
      h: 0,
    };
  }
}
