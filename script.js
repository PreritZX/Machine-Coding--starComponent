let container = document.getElementById('container')
let star = document.querySelectorAll('.star')
let counter = document.getElementById('count')

let filled = 0;

container.addEventListener('click', function(e){
    let currentClicked = e.target.dataset.index

    for(let i=0 ; i<filled ; i++ ){
        star[i].classList.remove('star-colored')
    }

    for(let i=0; i<currentClicked; i++){
        star[i].classList.add('star-colored')
    }

    filled = currentClicked
    counter.innerText = currentClicked
})