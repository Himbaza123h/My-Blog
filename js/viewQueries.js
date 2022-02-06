function viewQueries(){
    let parser = new DOMParser();
    let queries = JSON.parse(localStorage.getItem('queries'));
     if (queries && queries.length > 0) {
       queries.forEach(query =>{
             let queryDiv = `
             <td>${query.name}</td>
             <td>${query.email}</td>
             <td>${query.subject}</td>
             <td>${query.message}</td>
           `;
             let tr = document.createElement('tr');
             tr.innerHTML = queryDiv;
           document.querySelector("tbody").appendChild(tr);
       })
     }else{
           let errorDiv = document.createElement('div'),
               erroDivText = document.createTextNode("No Articles Currently");
               errorDiv.appendChild(erroDivText);
               errorDiv.classList.add('error')
               errorDiv.classList.add('short-error')

               errorDiv.style.display = 'block';
              document.querySelector('#content').appendChild(errorDiv);
     }
}  

export {viewQueries};