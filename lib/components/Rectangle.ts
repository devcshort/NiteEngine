type Options = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export function Rectangle(ctx: CanvasRenderingContext2D, opts: Options) {
  ctx.fillRect(opts.x, opts.y, opts.w, opts.h);
}
