function eventListener(){
    console.log('Event happend!')
}

function normalFunctionOne() {
    console.log("This is what i call a function")
}

function normalFunctionTwo(){
    console.log("this is what i call another function")
}

document.addEventListener('DOMContentLoaded', eventListener)
normalFunctionOne();
normalFunctionTwo();
console.log('Execution finished')


