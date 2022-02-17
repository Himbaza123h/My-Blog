function viewQueries(){
 let bearer = `Bearer ${localStorage.getItem("token")}`;

    fetch(`https://rukundo-kevin-blog.herokuapp.com/query`, {
        headers: {
          'Authorization': bearer
        }
        }).then(res => {
             if(res.ok){
               return res.json();
             }     
        }).then((data)=>{
            let  queries = data;
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
                      erroDivText = document.createTextNode("No Queries Currently");
                      errorDiv.appendChild(erroDivText);
                      errorDiv.classList.add('error')
                      errorDiv.classList.add('short-error')
    
                      errorDiv.style.display = 'block';
                      document.querySelector('tbody').appendChild(errorDiv);
            }
        }).catch((err)=>{
            alert("Problem connecting to the server")
        })
}  

export {viewQueries};