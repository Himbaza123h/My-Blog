import {addLike,addDislike,displayLikes,getDislike} from './addLike.js'
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

function viewBlogArticle(){
    let id = [...document.location.search].splice(4).join("");

    fetch(`https://rukundo-kevin-blog.herokuapp.com/article/${id}`)
    .then(response => response.json())
    .then(data => {
    let article = data;
                    let articleDiv = `
                    <div class="header">
                    ${article.heading}
                </div>  
                <div class="article-info">
                    <span class="username"> Rukundo Kevin </span> <br>
                    <span class="article-time">${article.date}</span>
                </div>
                <div class="article-body">
                <img src="${article.image}" alt="Rukundo Kevin" class="img-big">  <br>
                    <p> 
                     ${article.content}
                    </p>   
                </div>
                <div class="article-info article-comments">
                    <span id="like"> <i class="fas fa-thumbs-up"> Like <span id="likeNumber">10</span> </i>  </span> 
                    <span id="dislike"> <i class="fas fa-thumbs-down"> Dislike <span id="dislikeNumber">10</span> </i>  </span> 
                    <span><i class="fas fa-comment" id="commentSpan"> Comments </i></span> <br>
                    <div class="article-comment comment-form" id="commentForm">
                        <div class="comment-form-error">
                            Error Message
                        </div>
                        <div class="form-item" >
                        <input type="text" name="comment" id="commentValue">
                        <button class="btn btn-small btn-n-border btn-comment" style="display: inline-block;"  id="comment">
                           <i class="fas fa-arrow-right"> Comment </i>
                        </button>
                        </div>
                    </div>`;
                document.querySelector(".article").innerHTML = articleDiv;
                viewComments();
                let like = document.querySelector("#like"),
                 dislike = document.querySelector("#dislike"),
                 commentBtn = document.querySelector("#comment"),
                 commentValue =document.querySelector("#commentValue"),
  
                 likeNumber = document.querySelector("#likeNumber"),
                 dislikeNumber = document.querySelector("#dislikeNumber");
  
                 id = [...document.location.search].splice(4).join("");
  
                 displayLikes(id);
                 getDislike(id);
  
                like.addEventListener("click",function (e) {
                     if(isLoggedIn()){
                          addLike(id,like);
                     }else{
                      alert("You should be Logged in to Like an article")
                 }
                  })
  
                  commentBtn.addEventListener("click",function (e) {
                 e.preventDefault();
                 if(isLoggedIn()){
                      if(commentValue.value.length > 5){
                           addComment(id,commentValue.value);
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
                          addDislike(id,like);
                     }else{
                          alert("You should be Logged in to dislike")
                     }
                  })
    })
}        

export {viewBlogArticle};