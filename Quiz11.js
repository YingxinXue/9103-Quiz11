function makeRGB(redInputValue, greenInputValue, blueInputValue) {

    let redOutputValue = redInputValue ?? Math.round(Math.random() * 255);
    let greenOutputValue = greenInputValue ?? Math.round(Math.random() * 255);
    let blueOutputValue = blueInputValue ?? Math.round(Math.random() * 255);
   
    return `rgb(${redOutputValue},${greenOutputValue},${blueOutputValue})`
}

let width = window.innerWidth;
//let height = window.innerHeight;
let height = 662;

svg = document.getElementById('mysvg');
svg.setAttribute('width', width);
svg.setAttribute('height', height);
svg.setAttribute("style", "background-color: white")
console.log(svg);

function drawCircle(x,y,rr,r,g,b,p) {
    let X = x ?? Math.round(Math.random() * width);
    let Y = y ?? Math.round(Math.random() * height);
    let R = rr ?? Math.round(Math.random() * 150);
    let C = makeRGB(r,g,b);
    let P = p ?? Math.random();

    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    newCircle.setAttribute("cx", X);
    newCircle.setAttribute("cy", Y);
    newCircle.setAttribute("r", R);
    newCircle.setAttribute('fill', C);
    newCircle.setAttribute('fill-opacity', P);

    svg.appendChild(newCircle);

}

function drawAll() {
    drawCircle();
    drawCircle(10,10,100,null,null,null,null);
    drawCircle(null,null,null,100,100,100,null);
    drawCircle();
    drawCircle();
    drawCircle();
    drawCircle(null,null,null,null,null,null,0.4);
    drawCircle(60,null,18,null,100,null,null);
    drawCircle();
    drawCircle();
    drawCircle();
    drawCircle();
    drawCircle(300,null,30,null,null,null,null);
    drawCircle();
    drawCircle(null,null,10,null,null,null,null);
    drawCircle();
    drawCircle(900,null,30,null,null,null,null);
}

drawAll()

const button = document.getElementById("button");
button.addEventListener("click", function(e) {
    svg.replaceChildren();
    drawAll()
} );

