// const formEL = document.querySelector("#form");
const inputEl = document.querySelector("#saerch-inp");
const BtnEl = document.querySelector("#search-btn");
const not_found = document.querySelector("#not_found");
const foundedWord = document.querySelector("#result-word")
const definition = document.querySelector("#definition")
const example = document.querySelector("#example")





BtnEl.addEventListener("click", e => {
    e.preventDefault();
    const word = inputEl.value;

    if(word === ""){
        alert('Please type a word');
        return;
    }
    
    dataGet(word);

    not_found.className = "not_found";
    not_found.innerHTML = ""
});


async function dataGet (word) {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data  = await response.json();

        if(!data.length){
            not_found.innerText = "No results"
            return;
        }

        foundedWord.innerText = `${inputEl.value} - ${data[0].phonetics[0].text}`;

        data[0].meanings[0].definitions.forEach( d => {
            
            not_found.innerHTML += `<p class="definition">${d.definition}</p> </br>`
            if(d.example){
                not_found.innerHTML += `<i class="example">Example: "${d.example}"</i> </br></br>`
            } 

        });

       const audio = data[0].phonetics.forEach( e=> {
        const player = document.createElement("audio")
           
        if(e.audio !== ""){
            if(e.audio){
                player.src = e.audio
                player.setAttribute("controls","") 
                not_found.appendChild(player)
            }
        }
         
       })
       

    }


 