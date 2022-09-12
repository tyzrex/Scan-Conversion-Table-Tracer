const displayProcedure = document.getElementById("display");


export const traceDDA = (x0,y0,x1,y1,tab=0) => {
    console.log(x0,y0,x1,y1);

    let table={
        X : [],
        Y : [],
        X_plot : [],
        Y_plot : [],
        xy : [],
    }

    let dx = x1 - x0;
    let dy = y1 - y0;

    let steps;
    if(dx>dy){
        steps = dx;
    }else{
        steps = dy;
    }

    let xinc = dx / steps;
    let yinc = dy / steps;
    let x = x0;
    let y = y0;
    let i = 0;
    let arr = [];
    let floatarr = [];

    while(i<=steps){
        arr.push([Math.round(x),Math.round(y)]);
        floatarr.push([parseFloat(x).toFixed(1),parseFloat(y).toFixed(1)]);
        x = Number(x) + Number(xinc);
        y = Number(y) + Number(yinc);
        i++;
    }

    displayProcedure.innerHTML = `
    <div class="flex gap-8 justify-center items-center text-sm md:text-lg font-extralight">
    <div>
    <p>x0 : ${x0}</p>
    <p>y0 : ${y0}</p>
    <p>x1 : ${x1}</p>
    <p>y1 : ${y1}</p>
    <p>dx = x1-x0 = ${dx}</p>
    </div>
    <div>
    <p>dy = y1-y0 = ${dy}</p>
    <p>steps = max(dx,dy) = ${steps}</p>
    <p>Steps= ${steps}</p>
    <p>Xinc = dx/steps = ${xinc}</p>
    <p>Yinc = dy/steps = ${yinc}</p>
    </div>
    </div>
    `
    // let x0span = document.getElementById("x0");
    // x0span.innerHTML = `<p>${x0}</p>`;
    // let y0span = document.getElementById("y0");
    // y0span.innerHTML = `<p>${y0}</p>`;
    // let x1span = document.getElementById("x1");
    // x1span.innerHTML = `<p>${x1}</p>`;
    // let y1span = document.getElementById("y1");
    // y1span.innerHTML = `<p>${y1}</p>`;
    // let dxspan = document.getElementById("dx");
    // dxspan.innerHTML = `<p>${dx}</p>`;
    // let dyspan = document.getElementById("dy");
    // dyspan.innerHTML = `<p>${dy}</p>`;
    // let stepspan = document.getElementById("steps");
    // stepspan.innerHTML = `<p>${steps}</p>`;
    // let xincspan = document.getElementById("xinc");
    // xincspan.innerHTML = `<p>${xinc}</p>`;
    // let yincspan = document.getElementById("yinc");
    // yincspan.innerHTML = `<p>${yinc}</p>`;

    if(tab = 1){
        for(let i=0;i<arr.length;i++){
            table.X.push(floatarr[i][0]);
            table.Y.push(floatarr[i][1]);
            table.X_plot.push(arr[i][0]);
            table.Y_plot.push(arr[i][1]);
            table.xy.push(arr[i][0]+","+arr[i][1]);
        }
    }
    console.log(table);
    return table;
}
