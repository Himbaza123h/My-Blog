import { generateId } from './generateId.js';

function addQuery(name,email,subject,message){
    const article = {
        heading :articleHeading,
        content : articleContent,
        date: new Date().toLocaleDateString(),
        likes:0,
        comments: 0
    }
    
      localStorage.setItem(`${generateId()}`,JSON.stringify(article));

      //console.log(localStorage.getItem(`${guid()}`))
}

export { addArticle }; 