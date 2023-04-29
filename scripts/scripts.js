/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

/*explore more button*/
const exploreBtn = document.querySelector('.explore-more-btn');
const text = document.querySelector('.text');

exploreBtn.addEventListener('click', (e)=>{
    text.classList.toggle('show-more');
    if (exploreBtn.innerText === 'Explore Less'){
        exploreBtn.innerText ='Explore More';
    } else{
        exploreBtn.innerText ='Explore Less';
    }
})




/*star rating reference: https://www.youtube.com/watch?v=UCdaOBWOh2c*/

function hideUnhide(id){
    const s1 = document.getElementById(id);
    if (s1.style.display == "block"){
        s1.style.display = "none";
    }else {
        s1.style.display = "block";
    }
}

