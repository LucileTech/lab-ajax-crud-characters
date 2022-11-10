const charactersAPI = new APIHandler("http://localhost:8000");
const editName = document.getElementsByClassName("name");
const editOccupation = document.getElementsByClassName("occupation");
const editCartoon = document.getElementsByClassName("cartoon");
const editWeapon = document.getElementsByClassName("weapon");
const characterInfo = document.querySelector(".character-info");
const characterContainer = document.querySelector(".characters-container");

// async function fetchCharacters() {
// 	const { data } = await axios.get("http://localhost:3000/phone")
// 	characterList.innerHTML = ""
// 	data.forEach((character) => {
// 		const li = document.createElement("li")
// 		li.innerHTML = `<span class="name">${character.name}</span> cost
//     $<span class="price">${character.price}</span>
//     <span class="edit"><i data-id="${character._id}" class="fa-solid fa-pen-to-square"></i></span>
//     <span class="delete"><i class="fa-solid fa-trash"></i></span>`
// 		// We might need the id later on (To update or delete !)
// 		// Storing it inside of a dataset.
// 		li.dataset.id = character._id
// 		characterList.append(li)
// 	})
// }

/**
 * Event listeners
 */

// function fetchCharacter(character) {
//   const { name, occupation, weapon, cartoon } = character;
//   const template = document.querySelector(".character-card");
//   const clone = template.content.cloneNode(true);
//   let characterName = clone.querySelector(".name");
//   let characterOccupation = clone.querySelector(".occupation");
//   let characterWeapon = clone.querySelector(".weapon");
//   let characterCartoon = clone.querySelector(".cartoon");

//   characterName.innerHTML += `<span> ${name}</span>`;
//   characterOccupation.innerHTML += `<span> ${occupation}</span>`;
//   characterWeapon.innerHTML += `<span> ${weapon}</span>`;
//   characterCartoon.innerHTML += `<span> ${cartoon}</span>`;

//   characterContainer.appendChild(clone);
// }

window.addEventListener("load", () => {
  //TEST OK FETCH ALL
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      event.preventDefault();
      axios.get(`http://localhost:8000/characters`).then((response) => {
        const allCharacters = response.data;
        allCharacters.forEach((character) => {
          const clone = characterInfo.cloneNode(true);
          clone.querySelector(".name").innerText = character.name;
          clone.querySelector(".occupation").innerText = character.occupation;
          clone.querySelector(".cartoon").innerText = character.cartoon;
          clone.querySelector(".weapon").innerText = character.weapon;
          characterContainer.append(clone);
        });
      });
      // .catch((err) => console.log("Character not found "))
    });

  // const { data } = await axios.get("http://localhost:8000/characters");
  // console.log(data);
  // characterList.innerHTML = "";
  // data.forEach((character) => {
  //   // console.log(editName.innerHTML);
  //   // const li = document.createElement("li")
  //   editName.innerHTML += `: ${character.name}`;
  //   // editOccupation.innerHTML += `${character.occupation}`,
  //   // editCartoon.innerHTML += `${character.cartoon}`,
  //   // editWeapon.innerHTML += `${character.weapon}`,
  // });

  // data.forEach((character) => {
  //   const li = document.createElement("li");
  //   li.innerHTML = `<span class="name">${character.name}</span> cost
  //   $<span class="price">${character.price}</span>
  //   <span class="edit"><i data-id="${character._id}" class="fa-solid fa-pen-to-square"></i></span>
  //   <span class="delete"><i class="fa-solid fa-trash"></i></span>`;
  //   // We might need the id later on (To update or delete !)
  //   // Storing it inside of a dataset.
  //   li.dataset.id = character._id;
  // characterList.append(li);

  //TEST OK DELETE ONE
  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      event.preventDefault();
      console.log(document.getElementsByTagName("input")[1].value);
      const { data } = await axios.delete(
        `http://localhost:8000/characters/${
          document.getElementsByTagName("input")[1].value
        }`
      );
      console.log("Character has been successfully deleted");
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      axios
        .get(
          `http://localhost:8000/characters/${
            document.getElementsByTagName("input")[0].value
          }`
        )
        .then((response) => {
          console.log(response.data);
          const clone = characterInfo.cloneNode(true);
          const oneCharacter = response.data;
          document.querySelector(".name").innerText = oneCharacter.name;
          document.querySelector(".occupation").innerText =
            oneCharacter.occupation;
          document.querySelector(".cartoon").innerText = oneCharacter.cartoon;
          document.querySelector(".weapon").innerText = oneCharacter.weapon;
          characterContainer.append();
        });
      // .catch((err) => console.log("Error while getting the data: ", err))
    });

  document
    .getElementById("create-data")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let character = {};
      character.name = document.getElementsByTagName("input")[2].value;
      character.occupation = document.getElementsByTagName("input")[3].value;
      character.weapon = document.getElementsByTagName("input")[4].value;
      character.cartoon = document.getElementsByTagName("input")[5].value;
      console.log(character);
      axios
        .post(`http://localhost:8000/characters/`, character)
        .then((response) => {
          console.log(response.data);
          const newCharacter = response.data;
          document.querySelector(".name").innerText = newCharacter.name;
          document.querySelector(".occupation").innerText =
            newCharacter.occupation;
          document.querySelector(".cartoon").innerText = newCharacter.cartoon;
          document.querySelector(".weapon").innerText = newCharacter.weapon;
          characterContainer.append(clone);
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      let character = {};
      character.id = document.getElementById("the-id").value;
      character.name = document.getElementsByTagName("input")[7].value;
      character.occupation = document.getElementsByTagName("input")[8].value;
      character.weapon = document.getElementsByTagName("input")[9].value;
      character.cartoon = document.getElementsByTagName("input")[10].value;
      const id = document.getElementById("the-id").value;
      console.log(id);
      axios
        .patch(`http://localhost:8000/characters/${id}`, character)
        .then((response) => {
          console.log(response.data);
          const newCharacter = response.data;
          document.querySelector(".name").innerText = newCharacter.name;
          document.querySelector(".occupation").innerText =
            newCharacter.occupation;
          document.querySelector(".cartoon").innerText = newCharacter.cartoon;
          document.querySelector(".weapon").innerText = newCharacter.weapon;
          characterContainer.append(clone);
        });
      // .catch((err) => console.log("Character not found "))
      // const url = `http://localhost:8000/characters/${id}`;
      // try {
      //   const updatedCHaracter = await axios({
      //     method: "PATCH",
      //     baseURL: url,
      //     data: character,
      //   });
      //   const { data } = await axios.patch(url, character);
      //   await axios({
      //     method: "PATCH",
      //   });
      // } catch (error) {
      //   console.log(error);
      // }
    });
});
