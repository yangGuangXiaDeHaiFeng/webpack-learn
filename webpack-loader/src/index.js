
const img=require("./image/image.png");

function createEl() {
    var element = document.createElement('img')
    element.src = img;

    return element;
}

document.body.appendChild(createEl());
