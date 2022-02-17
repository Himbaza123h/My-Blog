import { generateId } from './generateId.js';
import { getUserId } from './main.js';

function addComment(id,userId,commentValue){
     let temp = JSON.parse(localStorage.getItem('comments'));
      let   comments = temp ? temp : [];
 
     const newComment = {
        commentId:`${generateId()}`,
        commentContent :commentValue,
        date: new Date().toLocaleDateString(),
        userId:userId,
        articleId:id
     }
 
     comments.push(newComment);

    localStorage.setItem( "comments", JSON.stringify(comments));
    alert("Your Comment Added Successfully");
    location.reload();
}

function getUsername(userId){
    let users = JSON.parse(localStorage.getItem('users'));
    let username ;
     if (users && users.length > 0) {
       users.forEach(user =>{
           if (user.userId  == userId) {
             username=   user.username;
           }
       })
    }     
    return username;
}

function viewComments(){
  let id = [...document.location.search].splice(4).join("");

  fetch(`https://rukundo-kevin-blog.herokuapp.com/comment/${id}`)
  .then(response => response.json())
  .then(data => {
    let parser = new DOMParser();
    let comments = data;
     if (comments && comments.length > 0) {
       comments.forEach(comment =>{
           if (comment.articleId == id) {
            let commentDiv = `
            <span class="username username-comment"> ${getUsername(comment.userId)} </span> <br>
               ${comment.commentContent}
            `;
              let d = document.createElement('div');
              d.classList.add("article-comment")
              d.innerHTML = commentDiv;
              console.log( document.querySelector(".article-comments").lastChild)
            document.querySelector(".article-comments").insertBefore(d,document.querySelector(".article-comments").lastChild); 
           }
       })
     }else{
     //  console.log(data)
     }
    })
} 

export { addComment ,viewComments}; 