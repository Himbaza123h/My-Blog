// document.querySelector('#contact-form').addEventListener('submit',function(e){
//     e.preventDefault();
//     validateInput(e.target);
// })

// document.querySelector('#login-form').addEventListener('submit',function(e){
//     e.preventDefault();
//     validateInput(e.target);
// })

document.querySelector('#add-article-form').addEventListener('submit',function(e){
    e.preventDefault();
    validateInput(e.target);
})


function validateInput(form){
    if (form.id == 'contact-form') {
        let message = document.querySelector('#message'),
        email = document.querySelector('#email'),
        name = document.querySelector('#name'),
        subject = document.querySelector('#subject');
        messageValue = message.value.replace(/ /g,'');
        
        if( email.value != ""  && name.value != ""  && subject.value != "" && message.value > 1 ){
             
        }else{
            document.querySelector('div.error').innerHTML = 'Please fill all fields before submitting.';
            document.querySelector('div.error').style.display = 'block';
        }

    }else if(form.id == 'login-form'){
        let username = document.querySelector('#username'),
        password = document.querySelector('#password');
        
        if( username.value != ""  && password.value != "" ){
               window.location = "owner/index.html"
        }else{
            document.querySelector('div.error').innerHTML = 'Please fill all fields before submitting.';
            document.querySelector('div.error').style.display = 'block';
        }   
      }

    else if(form.id == 'add-article-form'){
        let articleHeading = document.querySelector('#article-heading'),
        articleContent = document.querySelector('#article-content');
        
        if( articleHeading.value != ""  && articleContent.value != "" ){
               if (articleHeading.value.length < 21) {
                document.querySelector('div.error').innerHTML = 'The article heading should not be less than 20 letters.';
                document.querySelector('div.error').style.display = 'block';                   
               }
               if (articleContent.value.length < 50) {
                document.querySelector('div.error').innerHTML = 'The article contents should not be less than 50 letters.';
                document.querySelector('div.error').style.display = 'block';      
               }
               if(articleContent.value.length > 50 && articleHeading.value.length > 21){
                   addArticle(articleHeading.value,articleContent.value);
               }
        }else{
            document.querySelector('div.error').innerHTML = 'Please fill all fields before submitting.';
            document.querySelector('div.error').style.display = 'block';
        }   
    }
}


function addArticle(articleHeading,articleContent){
      localStorage.setItem("heading",articleHeading);
      console.log(localStorage.getItem("heading"))
}