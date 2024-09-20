/* Start Setting Landgin */

let texts = document.querySelectorAll('.landing .text');
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');
let bullats = document.querySelectorAll('.landing .bullets li');
let btnScroll = document.getElementById('scroll-button')
let indexNumber = 0;

// Set Default Text 
function setDefaultText(){
    texts[indexNumber].style.transform = 'translateY(-50%) translateX(0)';
}
setDefaultText()
// =================
// set Bullet Active
function setBullets(){
    bullats.forEach(ele =>{
        ele.classList.remove('active');
    })
    bullats[indexNumber].classList.add('active')
}
setBullets()
// =============================
// Set Text Box To Move to right
function setTextright(){
    texts[indexNumber - 1 ].style.transform = 'translateY(-50%) translateX(-200%)';
    texts[indexNumber].style.transform = 'translateY(-50%) translateX(0)';
}
// ====================
// Set Text Box To Move To Left
function setTextLeft(){
    texts[indexNumber + 1].style.transform = 'translateY(-50%) translateX(200%)';
    texts[indexNumber].style.transform = 'translateY(-50%) translateX(0)';
}
// ====================
// Set The right Button
rightBtn.onclick = function (){
    setRigntBtn();
}
function setRigntBtn(){
    indexNumber++;
    if(indexNumber < texts.length){
        setTextright();
        setBullets();
    }else{
        indexNumber = texts.length - 1;
    }
}
// ===================
// Set The left Button 
leftBtn.onclick = function (){
    setLeftBtn()
}
function setLeftBtn(){
    indexNumber--;
    if(indexNumber >= 0){
        setTextLeft();
        setBullets();
    }else{
        indexNumber = 0 ;
    }
}

/* End Setting Landgin */
/*  Start Setting Our Skills Section */

let sectionContent = document.querySelectorAll('.our-skills .container .testimonials .testimonials-content .section');
let contensBull = document.querySelectorAll('.our-skills .container .testimonials  ul li');

console.log(sectionContent)

function setContentBullest(id){
    sectionContent.forEach(ele=>{
        ele.classList.remove('active');
    });
    sectionContent[id].classList.add('active');
    contensBull.forEach(ele=>{
        ele.classList.remove('active');
    });
    contensBull[id].classList.add('active');
}

/* End Setting Our Skills Section */

btnScroll.addEventListener('click' , function(){
    scroll({
        top:0,
        behavior: 'smooth',
    })
})
window.onscroll = function(){
    if(scrollY >= 777){
        btnScroll.style.display = 'block';
    }
    else{
        btnScroll.style.display = 'none'
    }
}


