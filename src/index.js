function getIDSelection(event){
    event.preventDefault();
    const idInput = document.getElementById("searchByID").value;
    fetch(`http://localhost:3000/movies/${idInput}`).then(resp => resp.status===404 ? alert("Please enter a valid ID") : resp.json()).then(json => renderMovie(json));
}

function renderMovie(obj) {
    const titleHeader = document.querySelector("#movieDetails > h4");
    const summaryPar = document.querySelector("#movieDetails > p");
    const idInputField = document.getElementById("searchByID");
    idInputField.value = "";
    titleHeader.textContent = obj.title;
    summaryPar.textContent = obj.summary;
}

const init = () => {
    const inputForm = document.querySelector("body > section:nth-child(3) > form");
    inputForm.addEventListener("submit",getIDSelection);
}

document.addEventListener('DOMContentLoaded', init);