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
  fetch(`https://rukundo-kevin-blog.herokuapp.com/user/${id}`)
  .then(response => response.json())
  .then(data => {   
    return username;
  })
}

function viewComments(){
  let id = [...document.location.search].splice(4).join("");

  fetch(`https://rukundo-kevin-blog.herokuapp.com/comment/article/${id}`)
  .then(response => response.json())
  .then(data => {
    let parser = new DOMParser();
    let comments = data;
    console.log(data)
       comments.forEach(comment =>{
           if (comment.articleId == id) {
            let commentDiv = `
            <span class="username username-comment"> ${getUsername(comment.userId)} </span> <br>
               ${comment.comment}
            `;
              let d = document.createElement('div');
              d.classList.add("article-comment")
              d.innerHTML = commentDiv;
              console.log( document.querySelector(".article-comments").lastChild)
            document.querySelector(".article-comments").insertBefore(d,document.querySelector(".article-comments").lastChild); 
           }
       })
     
    })
} 

export { addComment ,viewComments}; 