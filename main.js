const writeEffect = document.getElementById("input");
const button = document.getElementById("write");
const removeTitle = document.getElementById("title");

button.addEventListener("click", () => {
    console.log(writeEffect.value);
    writeEffect.style.display = "none";
    button.style.display = "none";
    document.getElementById("text").innerHTML = writeEffect.value;
    document.getElementById("title").innerText = "";
});