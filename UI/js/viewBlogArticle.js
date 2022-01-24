function viewBlogArticle(){
    let id = [...document.location.search].splice(4).join("");
    let articles = JSON.parse(localStorage.getItem('articles'));
     if (articles && articles.length > 0) {
       articles.forEach(article =>{
           if (article.articleId == id) {
                    let articleDiv = `
                    <div class="header">
                    ${article.heading}
                </div>  
                <div class="article-info">
                    <span class="username"> Rukundo Kevin </span> <br>
                    <span class="article-time">${article.date}</span>
                </div>
                <div class="article-body">
                    <p> 
                     ${article.content}
                    </p>   
                </div>
                <img src="${article.image}" alt="Rukundo Kevin" class="img-big">  <br>
                <div class="article-info article-comments">
                    <span id="like"> <i class="fas fa-thumbs-up"> Like <span id="likeNumber">10</span> </i>  </span> 
                    <span id="dislike"> <i class="fas fa-thumbs-down"> Dislike <span id="dislikeNumber">10</span> </i>  </span> 
                    <span><i class="fas fa-comment" id="commentSpan"> Comments </i></span> <br>
                    <div class="article-comment comment-form" id="commentForm">
                        <div class="comment-form-error">
                            Error Message
                        </div>
                        <div class="form-item" >
                        <input type="text" name="comment" id="commentValue">
                        <button class="btn btn-small btn-n-border btn-comment" style="display: inline-block;"  id="comment">
                           <i class="fas fa-arrow-right"> Comment </i>
                        </button>
                        </div>
                    </div>`;
                document.querySelector(".article").innerHTML = articleDiv;
           }
       })
     }
}        

export {viewBlogArticle};