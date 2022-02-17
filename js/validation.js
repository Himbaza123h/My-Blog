import { addArticle } from './addArticle.js';
import {addQuery } from './addQuery.js'
import {signin, signup} from './signup.js'
import {getUserId} from './main.js';

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

function  isPasswordStrong(pw) {
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})')
    
        if(strongPassword.test(pw)) {
               return 'strong';
        } else{
           return 'weak';
    }
}
function validateInput(form){
      let formEle = filterForm(form);
     
        if (form.id == 'contact-form') {
            if(!isEmpty(formEle)){
                let name = document.querySelector('#name').value,
                email = document.querySelector('#email').value,
                subject = document.querySelector('#subject').value,
                message = document.querySelector('#message').value;
                if (name.length > 5 && subject.length > 5 && message.length > 10) {
                    addQuery(name,email,subject,message);

                }else{
                    displayError('Field contents below minimum');
                }
            }else{
                displayError('Please fill all fields before submitting.');
            }
     }
     //if the current form is login form
     else if(form.id == 'login-form'){
        let username = document.querySelector("#username").value,
        password = document.querySelector("#password").value;
            if( !isEmpty(formEle)){
                signin(username,password);
            }else{
                displayError('Please fill all fields before submitting.');
            }   
         }

         else if(form.id == 'signup-form'){
         let username = document.querySelector("#username").value,
             password = document.querySelector("#password").value,
             passwordConfirm = document.querySelector("#passwordCheck").value;
            if( !isEmpty(formEle)){
                if (username.length < 5) {
                    displayError("Username too short");

                }else{
                if (isPasswordStrong(password) == 'strong') {
                   password == passwordConfirm?signup(username,password):displayError("Password don't match")
                     //
                }else{
                    displayError("Your Password is weak. <br> Tip: Include a capital letter and a number");
                }
            }
           }else{
                displayError('Please fill all fields before submitting.');
            }   
         }

    //if the current form is add article form
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
                   addArticle(articleHeading.value,articleContent.value,img,getUserId());
               }
        }else{
            displayError('Please fill all fields before submitting.');
        }   
    }

    else if(form.id == 'update-article-form'){
        let articleHeading = document.querySelector('#article-heading'),
        articleContent = document.querySelector('#article-content');
        
        if(!isEmpty(formEle)){
               if (articleHeading.value.length < 21) {
                 displayError('The article heading should not be less than 20 letters.');
               }
               if (articleContent.value.length < 50) {
                 displayError('The article contents should not be less than 50 letters.');     
               }
        }else{
            displayError('Please fill all fields before submitting.');
        }   
    }
}

