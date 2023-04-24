/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

/*explore more button*/
const exploreBtn = document.querySelector('.explore-more-btn');
const text = document.querySelector('.text');

exploreBtn.addEventListener('click', (e)=>{
    text.classList.toggle('show-more');
    if (exploreBtn.innerText === 'Explore More'){
        exploreBtn.innerText ='Explore Less';
    } else{
        exploreBtn.innerText ='Explore More';
    }
})

/*star rating*/

function hideUnhide(id){
    const s1 = document.getElementById(id);
    if (s1.style.display == "block"){
        s1.style.display = "none";
    }else {
        s1.style.display = "block";
    }
}


