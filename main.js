const writeEffect = document.getElementById("input");
const button = document.getElementById("write");

button.addEventListener("click", () => {
    console.log(writeEffect.value);
    writeEffect.style.display = "none";
    button.style.display = "none";
    document.getElementById("text").innerHTML = writeEffect.value;
});