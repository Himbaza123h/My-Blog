import { generateId } from './generateId.js';

function addArticle(articleHeading,articleContent,articleImage,userId){
     let temp = JSON.parse(localStorage.getItem('articles'));
      let   articles = temp ? temp : [];
 
     const newArticle = {
        articleId:`${generateId()}`,
        heading :articleHeading,
        content : articleContent,
        date: new Date().toLocaleDateString(),
        image:articleImage,
        userId:userId
     }
 
     articles.push(newArticle);
    localStorage.setItem( "articles", JSON.stringify(articles));
    alert("New article Added successfully");
    window.location= 'index.html';
}


export { addArticle }; 