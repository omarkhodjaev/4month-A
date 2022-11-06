// const formEL = document.querySelector("#form");
const inputEl = document.querySelector("#saerch-inp");
const BtnEl = document.querySelector("#search-btn");


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
    }

// fetch("https://api.dictionaryapi.dev/api/v2/entries/en/advance")
// .then(response => response.json())
// .then(data => console.log(data[0]))


