console.log("Hello, world!");

const elem = document.getElementById("sub");

if (elem == null) {
    console.warn("Element with id `sub` not found!")
} else {
    console.log(elem);
    elem.style = {
        color: "crimson"
    }
    elem.innerText = "Hello, world!";
}