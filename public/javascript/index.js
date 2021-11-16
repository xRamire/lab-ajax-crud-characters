const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI.getFullList()
      .then(res => {
        const charactersList = document.querySelector(".characters-container")

        let charactersInfo = ""

        res.data.reverse().forEach(character => {
            charactersInfo += `<div class="character-info">
            
            <div class="name">Name: ${character.name}</div> </br>
            <div class="occupation">Occupation: ${character.occupation}</div> </br>
            <div class="cartoon">Cartoon: ${character.cartoon}</div> </br>
            <div class="weapon">Weapon: ${character.weapon}</div> </br>
            
            </div>`
          
        });

        charactersList.innerHTML = charactersInfo
       
      })
      .catch(err => console.log(err))


      


  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const characterId = document.getElementById("eligeUno").value
    
    charactersAPI.getOneRegister(characterId)
        .then(res => {
        const charactersList = document.querySelector(".character-info")
        console.log(res)

        const character = res.data

        let charactersInfo = `
            <div class="name">${character.name}</div>
            <div class="occupation">${res.data.occupation}</div>
            <div class="cartoon">${res.data.cartoon}</div>
            <div class="weapon">${res.data.weapon}</div>`


        charactersList.innerHTML = charactersInfo
      })
      .catch(err => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});















