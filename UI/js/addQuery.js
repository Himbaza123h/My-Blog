import { generateId } from './generateId.js';

function addQuery(name,email,subject,message){
  
   const newQuery = {
      username :name,
      email : email,
      message:message,
      subject:subject
       }

       let  bearer = `Bearer ${localStorage.getItem("token")}`;

       fetch('https://rukundo-kevin-blog.herokuapp.com/query', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': bearer
          },
          body: JSON.stringify(newQuery)
          }).then(res => {
           if(res.ok){
            alert("Your Feedback Submitted Succefully");
            window.location= 'index.html';
           }
          }).catch((err)=>{
             alert("Problem connecting to the server")
          })
}

export { addQuery }; 