var text;

window.addEventListener("dblclick", function (event) {
    console.log(event.target.innerText);

    text = event.target.innerText;
}, false);


window.addEventListener("paste", function (event) {
    console.log(text);
    event.target.value = text;
}, false);