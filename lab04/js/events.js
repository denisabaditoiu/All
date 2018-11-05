function eventListener(){
    console.log('Dom LOADED')
}

function normalFunctionOne() {
    console.log("This is what i call a function")
}

function normalFunctionTwo(){
    console.log("this is what i call another function")
}
window.addEventListener('load', () => {
    console.log('Window loaded 1')
})
window.onload = () => {
    console.log('Window loaded')
} 
document.addEventListener('DOMContentLoaded', eventListener)
normalFunctionOne();
normalFunctionTwo();
console.log('Execution finished')
let btn = document.getElementById('my-btn');
  /*  btn.addEventListener('click', () => {
    console.log('hello');
    })
 */
 btn.onclick = () => {
     console.log('Pizza')
 }


