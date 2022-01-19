import { generateId } from './generateId.js';

function addQuery(name,email,subject,message){
    let temp = JSON.parse(localStorage.getItem('queries'));
    let   queries = temp ? temp : [];

   const newQuery = {
      articleId:`${generateId()}`,
      name :name,
      email : email,
      date: new Date().toLocaleDateString(),
      message:message,
      subject:subject
       }

   queries.push(newQuery);
  localStorage.setItem( "queries", JSON.stringify(queries));
  alert("Your Feedback Submitted Succefully");
  window.location= 'index.html';
}

export { addQuery }; 