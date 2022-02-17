import { generateId } from './generateId.js';

function addComment(id,commentValue){
  
   const newComment = {
      comment :commentValue,
      articleId:id
   }
  let  bearer = `Bearer ${localStorage.getItem("token")}`;

   fetch(`https://rukundo-kevin-blog.herokuapp.com/comment`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': bearer
      },
      body: JSON.stringify(newComment)
      }).then(res => {
         if (res.ok) {
            alert("Your Comment Added Successfully");
            location.reload();      
         }else{
           alert("Problem adding comment")
         }
      })
}

function displayComment(comment){
      const comments = fetch(`https://rukundo-kevin-blog.herokuapp.com/comment/user/${comment.userId}`)
      .then(response => {
         if(response.status == 200){
         return response.json()
         }else if(response.status == 206){
            return {"email": 'John Doe'};
         }
      })
      .then(data => { 
      let commentDiv = `
         <span class="username username-comment"> ${data.email} </span> <br>
            ${comment.comment}
         `;
         let d = document.createElement('div');
         d.classList.add("article-comment")
         d.innerHTML = commentDiv;
         // console.log( document.querySelector(".article-comments").lastChild)
         document.querySelector(".article-comments").insertBefore(d,document.querySelector(".article-comments").lastChild); 
      })
      .catch((err)=>{
         console.log(err)
      })
  return comments;
}

function viewComments(){
  let id = [...document.location.search].splice(4).join("");

  fetch(`https://rukundo-kevin-blog.herokuapp.com/comment/article/${id}`)
  .then(response => response.json())
  .then(data => {
    let parser = new DOMParser();
    let comments = data;
       comments.forEach(comment =>{
              displayComment(comment)
       })
     
    })
} 

export { addComment ,viewComments}; 