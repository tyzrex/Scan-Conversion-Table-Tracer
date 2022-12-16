import { drawLine } from "./drawline.mjs";

const displayProcedure = document.getElementById("display");
const canvas = document.getElementById("canvas");

export const traceBresenham = (x0, y0, x1, y1, tab = 0) => {
  let table = {
    X: [],
    Y: [],
    P: [],
    XY: [],
  };
  let m,dx,dy,x,y,p;
  if (x0 > x1 || y0 > y1) {
     dx = Math.abs(x1 - x0);
     dy = Math.abs(y1 - y0);
  } else {
     dx = x1 - x0;
     dy = y1 - y0;
  }
  x = x0;
  y = y0;
  m = dy / dx;
  p = 2 * dy - dx;
  if (m > 0 && m < 1) {
    while (x < x1 || x > x1) {
      table.X.push(x);
      table.Y.push(y);
      table.P.push(p);

      if (p >= 0) {
        if (x0 > x1 || y0 > y1 ) {
          y--;
        } else {
          y++;
        }
        p = Number(p) + Number(2 * dy) - Number(2 * dx);
      } else {
        p = Number(p) + Number(2 * dy);
      }
      x++;
      table.XY.push([x, y]);
    }
  }

  if (m > 1) {
    let p = 2 * dx - dy;
    while (y < y1 || y > y1) {
      table.X.push(x);
      table.Y.push(y);
      table.P.push(p);

      if (p >= 0) {
          x++;
        console.log(p);
        p = Number(p) + Number(2 * dx) - Number(2 * dy);
      } else {
        p = Number(p) + Number(2 * dx);
      }
      if (x0 > x1 || y0 > y1) {
        y--;
      }
        else {
            y++;
        }
      table.XY.push([x, y]);
    }
  }

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    drawLine(ctx, [x0, y0], [x1, y1], "black", 0.5);
  }

  displayProcedure.innerHTML = `
    <div class="flex gap-8 justify-center items-center text-sm md:text-lg font-extralight">
    <div>
    <p>x0 : ${x0}</p>
    <p>y0 : ${y0}</p>
    <p>x1 : ${x1}</p>
    <p>y1 : ${y1}</p>
    </div>
    <div>
    <p>dx = x1-x0 = ${dx}</p>
    <p>dy = y1-y0 = ${dy}</p>
    <p>m = dy/dx = ${m}</p>
    <p>p = 2dy-dx = ${p}</p>
    </div>
`;
  console.log(table);
  return table;
};
