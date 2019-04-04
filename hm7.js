var par = document.body.appendChild(document.createElement("p"))
par.innerText = "Click me"
var img = document.body.appendChild(
    document.createElement ( "img" ))


par.onclick = function (event) {
    img.src = "https://www.beboss.pro/new/files/c4/a8/24057734254ac3df6a01f6-php00-x3ujul.cropped380x380.jpg"
    img.width = 100
    img.addEventListener("mouseover", function( event ) {
        event.target.width = 200
        event.target.style.transition = "all 2s";})
    img.addEventListener("mouseout", function( event ) {
        event.target.width = 100;})
}
img.onclick = function (event) {
    img.parentNode.removeChild(img)
}

