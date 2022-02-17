import {viewArticles, viewBlog} from './viewArticles.js';
import {fetchUpdateArticle,updateArticle} from './updateArticle.js';
import {deleteArticle} from './deleteArticle.js'
import {viewQueries} from './viewQueries.js'
import { viewBlogArticle } from './viewBlogArticle.js';
import {addLike,addDislike,getLikes,getDislike} from './addLike.js'
import { addComment,viewComments } from './addComment.js';

function  isLoggedIn() {
     let signIn = document.querySelector("#signIn");
       if (localStorage.getItem("token")) {
          signIn.href = 'sign-out.html';
          signIn.childNodes[1].childNodes[1].innerHTML = 'Sign out';    
          return true;       
       }
    else{
     return false;
    }  
}

function  getUserId() {
     let users = JSON.parse(localStorage.getItem('users'));
     let userId ;
      if (users && users.length > 0) {
        users.forEach(user =>{
            if (user.loggedIn ) {
              userId=   user.userId;
            }
        })
     }     
     return userId;
}

function redirect() {
     if(isLoggedIn()){

     }else{
          window.location = '../index.html';
     }
}

document.addEventListener("DOMContentLoaded",function(){
   isLoggedIn();
    switch (document.body.id) {
         case 'updateArticleFile':
          redirect();
          let img ;
                 
               document.querySelector("#article-image").addEventListener("change",function(){
               const reader = new FileReader();

               reader.addEventListener("load",() =>{
                    img = reader.result;
               });

               reader.readAsDataURL(this.files[0]);
               })
               
              fetchUpdateArticle();   
               document.querySelector("#update-article-form").addEventListener("submit",function (e) {
                     e.preventDefault();
                     updateArticle(img);
               })
         break;
         
         case 'viewArticlesFile':
              redirect();
              viewArticles();
            document.addEventListener("click",function (e) {
                 if(e.target.id == 'deleteArticle'){
                    deleteArticle( e.target.value);
                 }
            })
         break;
         case 'home':
             viewBlog();
         break;
         case 'viewQueriesFile':
             redirect();
              viewQueries();
         break;
         case 'blogArticleFile':
              viewBlogArticle();
              viewComments();
              let like = document.querySelector("#like"),
               dislike = document.querySelector("#dislike"),
               commentBtn = document.querySelector("#comment"),
               commentValue =document.querySelector("#commentValue"),

               likeNumber = document.querySelector("#likeNumber"),
               dislikeNumber = document.querySelector("#dislikeNumber");

               id = [...document.location.search].splice(4).join("");

               likeNumber.innerHTML = getLikes(id);
               dislikeNumber.innerHTML = getDislike(id);

              like.addEventListener("click",function (e) {
                   if(isLoggedIn()){
                        addLike(id,getUserId(),like);
                   }else{
                    alert("You should be Logged in to Like an article")
               }
                })

                commentBtn.addEventListener("click",function (e) {
               e.preventDefault();
               if(isLoggedIn()){
                    if(commentValue.value.length > 5){
                         addComment(id,getUserId(),commentValue.value);
                    }else{
                         document.querySelector('div.comment-form-error').innerHTML = "The comment shouldn't be blank or less than 5 characters";
                         document.querySelector('div.comment-form-error').style.display = 'block'; 
                    }
               }else{
                    document.querySelector('div.comment-form-error').innerHTML = 'You need to login to be able to comment';
                    document.querySelector('div.comment-form-error').style.display = 'block'; 
               }
              })

              dislike.addEventListener("click",function (e) {
                   if(isLoggedIn()){
                        addDislike(id,getUserId(),like);
                   }else{
                        alert("You should be Logged in to dislike")
                   }
                })
         break;
         default:
              break;
    }

  })

export {getUserId}