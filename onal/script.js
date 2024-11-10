document.getElementById('generateButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputDiv = document.getElementById('output');

    if (inputText.trim() === "") {
        outputDiv.innerHTML = "<p style='color: red;'>Por favor, escribe algo en el cuadro de texto.</p>";
    } else {
        outputDiv.innerHTML = `<p>Querido/a,</p>
                               <p>${inputText}</p>
                               <p>Con todo mi amor,</p>
                               <p>[Tu Nombre]</p>`;
    }
});