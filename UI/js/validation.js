import { addArticle } from './addArticle.js';
import {addQuery } from './addQuery.js'
let img ;
  document.addEventListener("DOMContentLoaded",function (e) {
       if (document.body.id == 'addArticleFile' ) {
        document.querySelector("#article-image").addEventListener("change",function(){
            const reader = new FileReader();

            reader.addEventListener("load",() =>{
                img = reader.result;
            });

            reader.readAsDataURL(this.files[0]);
        })         
       }
  })

document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    validateInput(e.target);
})

function filterForm(form){
    form = [...form.children];
    let inputEl = [];
        form.forEach(el=>{
            [...el.children].filter(ele=>{
                if (ele.nodeName == 'INPUT' || ele.nodeName == 'TEXTAREA') {  
                    inputEl.push(ele);
                }
            })
        }) 
   
    return inputEl;
}

function isEmpty(formElements){
    let c = 0;
    formElements.forEach(el=>{
       let elementValue = el.value.replace(/ /g,'');
        elementValue.length < 2?c++:c;
    })
    return c>0?true:false;
}

function displayError(message){
    document.querySelector('div.error').innerHTML = message;
    document.querySelector('div.error').style.display = 'block';
}

function validateInput(form){
      let formEle = filterForm(form);
     
        if (form.id == 'contact-form') {
            if(!isEmpty(formEle)){
                let name = document.querySelector('#name').value,
                email = document.querySelector('#email').value,
                subject = document.querySelector('#subject').value,
                message = document.querySelector('#message').value;
                console.log(message)
                  addQuery(name,email,subject,message);
            }else{
                displayError('Please fill all fields before submitting.');
            }
     }else if(form.id == 'login-form'){
            if( !isEmpty(formEle)){
               console.log ( document.querySelector('input'))
                window.location = "owner/index.html"
            }else{
                displayError('Please fill all fields before submitting.');
            }   
         }

    else if(form.id == 'add-article-form'){
        let articleHeading = document.querySelector('#article-heading'),
        articleContent = document.querySelector('#article-content');
        
        if(!isEmpty(formEle)){
               if (articleHeading.value.length < 21) {
                 displayError('The article heading should not be less than 20 letters.');
               }
               if (articleContent.value.length < 50) {
                 displayError('The article contents should not be less than 50 letters.');     
               }
               if(articleContent.value.length > 50 && articleHeading.value.length > 21){
                   document.querySelector('div.error').style.display = 'none'; 
                   addArticle(articleHeading.value,articleContent.value,img);
               }
        }else{
            displayError('Please fill all fields before submitting.');
        }   
    }
}

