const writeEffect = document.getElementById("input");
const button = document.getElementById("write");
const removeTitle = document.getElementById("title");
const emptyText = document.getElementById("write");

button.addEventListener("click", () => {
    console.log(writeEffect.value);
    writeEffect.style.display = "none";
    button.style.display = "none";
    document.getElementById("text").innerHTML = writeEffect.value;
    document.getElementById("title").innerText = "";

    //give an alert when the text is empty
    if (writeEffect.value == "") {
        alert("Please write something");
    }
    //if text is empty, do not display an empty text, go back to the original text with the title

    if (writeEffect.value == "") {
        document.getElementById("text").innerHTML = "Write something!😀";
        //center the text
        document.getElementById("text").style.textAlign = "center";

        document.getElementById("title").innerText = "";
        writeEffect.style.display = "block";
        button.style.display = "block";
    }

    //do not remove the title when the text is empty
    if (writeEffect.value == "") {
        removeTitle.style.display = "none";
    }
});