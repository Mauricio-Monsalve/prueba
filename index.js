import ansi from "ansi-colors-es6";

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.querySelector("input").value;

    console.log(ansi.green.bold.underline(input));
});