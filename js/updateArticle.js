function fetchUpdateArticle() {
    let id = [...document.location.search].splice(11).join("");
    fetch(`https://rukundo-kevin-blog.herokuapp.com/article/${id}`)
    .then(response => response.json())
    .then(data => {
       let articles = data;
        document.querySelector("#article-heading").value = articles.heading;
        document.querySelector("#article-content").value = articles.content
        document.querySelector("#preview").setAttribute("src",articles.image)
    })
}

function updateArticle(image) {
    let id = [...document.location.search].splice(11).join(""),
        heading = document.querySelector("#article-heading").value,
        content = document.querySelector("#article-content").value,
        bearer = `Bearer ${localStorage.getItem("token")}`;

     const updatedArticle = {
        heading : heading,
        content : content ,
        image : image
     }
     fetch(`https://rukundo-kevin-blog.herokuapp.com/article/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': bearer
        },
        body: JSON.stringify(updatedArticle)
      }).then(res => {
         if (res.ok) {
            alert("The article updated successfully");
            window.location= 'index.html';         
         }else{
             console.log(res)
         }
       }).then(data=>console.log)
       .catch((err)=>{
           alert("Problem connecting to the server")
       })
}

export { fetchUpdateArticle ,updateArticle};