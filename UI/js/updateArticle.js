function fetchUpdateArticle() {
    let id = [...document.location.search].splice(11).join("");
    let articles = JSON.parse(localStorage.getItem('articles'));
     if (articles) {
         articles.forEach(article=>{
             if (article["articleId"] == id) {
                  document.querySelector("#article-heading").value = article["heading"];
                  document.querySelector("#article-content").value = article["content"];
                  document.querySelector("#preview").setAttribute("src",article["image"])
             }
         })
     }
}

function updateArticle(image) {
    let id = [...document.location.search].splice(11).join("");
    let articles = JSON.parse(localStorage.getItem('articles'));
     if (articles) {
         articles.forEach(article=>{
             if (article["articleId"] == id) {
                article["heading"] = document.querySelector("#article-heading").value;
                article["content"] = document.querySelector("#article-content").value;
                article["image"] = image;
            }
         })
         localStorage.setItem("articles",JSON.stringify(articles));
         alert("The article updated successfully");
         window.location= 'index.html';
    } 
}


export { fetchUpdateArticle ,updateArticle};