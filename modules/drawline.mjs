export const drawLine = (ctx,begin,end,stroke='black', width=2) => {
    ctx.scale(6,6);
    if(stroke){
        ctx.strokeStyle = stroke;
    }
    if(width){
        ctx.lineWidth = width;
    }
    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end)
    ctx.stroke();
}