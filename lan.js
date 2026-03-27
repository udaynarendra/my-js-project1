let userInput=document.querySelector('.input');
let changedFromElement=document.querySelector('.js-From');
let changedToElement=document.querySelector('.js-To');
let changedFrom;
userInput.addEventListener('input',()=>{
    if(userInput.value===''){
    document.querySelector('.output').innerHTML='';}
})
changedFromElement.addEventListener('change',()=>{
changedFrom=changedFromElement.value;
});
let changedTo;
changedToElement.addEventListener('change',()=>{
changedTo=changedToElement.value;
})
function changeLanguage(){
    let changeLanguageTo=userInput.value;
    let url=`https://api.mymemory.translated.net/get?q=${userInput.value}&langpair=${changedFrom}|${changedTo}`;
    fetch(url).then(response=>response.json()).then(data=>{
        document.querySelector('.output').innerHTML=`<p class="text">${data.responseData.translatedText}`;
    });
}
document.querySelector('.js-btn').addEventListener('click',()=>{
    changeLanguage();
  
})