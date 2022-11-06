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

        data[0].meanings[0].definitions.forEach( d => {
            // if()   
            not_found.innerHTML += `<p class="definition">${d.definition}</p> </br>`
            if(d.example){
                not_found.innerHTML += `<i class="example">Example: "${d.example}"</i> </br></br>`
            } 

        });


    //    if(data[0].meanings[0].definitions[0].example){
    //     let exampleData = data[0].meanings[0].definitions[0].example
    //     example.innerHTML = exampleData;
    //    }



    }




