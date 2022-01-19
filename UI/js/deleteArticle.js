function deleteArticle(articleId) {
    let articles = JSON.parse(localStorage.getItem('articles'));
     if (articles) {
         let res = confirm("Do you really want to delete this article?")
         if (res) {
            articles.forEach((article,id)=>{
                if (article["articleId"] == articleId) {
                    articles.splice(id,1);
                }
            })
            console.log(articles)
             localStorage.setItem("articles",JSON.stringify(articles));
             alert("The article Deleted successfully");
             window.location= 'index.html';
        }
    } 
}

export {deleteArticle}