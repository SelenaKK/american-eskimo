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




/*star rating reference: https://www.youtube.com/watch?v=UCdaOBWOh2c

function hideUnhide(id){
    const s1 = document.getElementById(id);
    if (s1.style.display == "block"){
        s1.style.display = "none";
    }else {
        s1.style.display = "block";
    }
}
*/

const socialButton = document.getElementById('social_part');
const context = document.getElementById('social');

socialButton.addEventListener('click', () =>{
    context.classList.toggle('show');
    if (context.style.display == "block"){
        context.style.display = "none";
    }else{
        context.style.display = "block";
    }
})

const physicalButton = document.getElementById('physical_part');
const contextTwo = document.getElementById('physical');

physicalButton.addEventListener('click', () =>{
    contextTwo.classList.toggle('show');
    if (contextTwo.style.display == "block"){
        contextTwo.style.display = "none";
    }else{
        contextTwo.style.display = "block";
    }
})

const personButton = document.getElementById('personality_part');
const contextThree = document.getElementById('personality');

personButton.addEventListener('click', () =>{
    contextThree.classList.toggle('show');
    if (contextThree.style.display == "block"){
        contextThree.style.display = "none";
    }else{
        contextThree.style.display = "block";
    }
})

const lifeButton = document.getElementById('life_part');
const contextFour = document.getElementById('family');

lifeButton.addEventListener('click', () =>{
    contextFour.classList.toggle('show');
    if (contextFour.style.display == "block"){
        contextFour.style.display = "none";
    }else{
        contextFour.style.display = "block";
    }
})