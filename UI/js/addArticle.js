import { generateId } from './generateId.js';

function addArticle(articleHeading,articleContent,articleImage){
     let temp = JSON.parse(localStorage.getItem('articles'));
      let   articles = temp ? temp : [];
 
     const newArticle = {
        articleId:`${generateId()}`,
        heading :articleHeading,
        content : articleContent,
        date: new Date().toLocaleDateString(),
        image:articleImage,
        likes:0,
        comments: 0
     }
 
     articles.push(newArticle);
    localStorage.setItem( "articles", JSON.stringify(articles));
      //console.log( localStorage.getItem('articles'));
}

export { addArticle }; 