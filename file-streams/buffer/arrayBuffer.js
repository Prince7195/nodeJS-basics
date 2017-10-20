var arrBuffer = new ArrayBuffer(8);
var view = new Int32Array(arrBuffer);

view[0] = 5;
view[1] = 15;
view[2] = 30;
console.log(view);