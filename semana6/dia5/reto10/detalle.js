// JSON.parse convierte un string a un JSON (objeto)
const objetoCharacter = JSON.parse(localStorage.getItem("character"));

const imgDetail = document.querySelector("#img-detail");
const statusCharacter = document.querySelector("#status");
const nameCharacter = document.querySelector("#name");

statusCharacter.innerHTML = objetoCharacter.status;
nameCharacter.innerHTML = objetoCharacter.name;
imgDetail.src = objetoCharacter.image;
