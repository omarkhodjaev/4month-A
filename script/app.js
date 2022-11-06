// const formEL = document.querySelector("#form");
const inputEl = document.querySelector("#saerch-inp");
const BtnEl = document.querySelector("#search-btn");
const not_found = document.querySelector("#not_found");
const foundedWord = document.querySelector("#result-word")
const definition_box = document.querySelector("#definition")


BtnEl.addEventListener("click", e => {
    e.preventDefault();

    const word = inputEl.value;
    if(word === ""){
        alert('Please type a word');
        return;
    }
    
    dataGet(word);
});


    async function dataGet (word) {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data  = await response.json();
        console.log(data)

        if(!data.length){
            not_found.innerText = "No results"
            return;
        }

        foundedWord.innerText = inputEl.value;
        
    }




