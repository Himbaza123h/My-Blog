import { generateId } from './generateId.js';

function addArticle(articleHeading,articleContent,articleImage,userId){
   const newArticle = {
      heading :articleHeading,
      content : articleContent,
      image:articleImage,
   }
  let  bearer = `Bearer ${localStorage.getItem("token")}`;

   fetch('https://rukundo-kevin-blog.herokuapp.com/article', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': bearer
      },
      body: JSON.stringify(newArticle)
      }).then(res => {
       if(res.ok){
         alert("New article Added successfully");
         window.location= 'index.html';
       }
      }).catch((err)=>{
         alert("Problem connecting to the server")
      })
}


export { addArticle }; 