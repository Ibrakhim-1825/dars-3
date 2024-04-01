const items = document.querySelectorAll(".main__items");
let btn = document.querySelector(".main__btn");
let inp = document.querySelector(".main__input");

const clearColor = () => {
    for( let i of items){
        i.style.backgroundColor = "";
    }
}

const AcceseBtn = () => {
clearColor();

    let idf = false;
    for(let i of items){
        if(inp.value.toLocaleLowerCase == i.text.toLocaleLowerCase){
            i.style.backgroundColor = "red";
            idf = true;
        }
    }
}
