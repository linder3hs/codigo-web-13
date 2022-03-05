// JSON.parse convierte un string a un JSON (objeto)
const objetoCharacter = JSON.parse(localStorage.getItem("character"));

const imgDetail = document.querySelector("#img-detail");
const statusCharacter = document.querySelector("#status");
const nameCharacter = document.querySelector("#name");

const locationCharacter = document.querySelector("#location");
const origin = document.querySelector("#origin");
const episodes = document.querySelector("#episodes");
const species = document.querySelector("#species");

statusCharacter.innerHTML = objetoCharacter.status;
nameCharacter.innerHTML = objetoCharacter.name;
imgDetail.src = objetoCharacter.image;
locationCharacter.innerHTML = objetoCharacter.location.name;
origin.innerHTML = objetoCharacter.origin.name;
episodes.innerHTML = objetoCharacter.episodes.length;
species.innerHTML = objetoCharacter.species;
