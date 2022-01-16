function viewArticles(){
     let parser = new DOMParser();
     let articles = JSON.parse(localStorage.getItem('articles'));
      if (articles) {
        articles.forEach(article =>{
              let articleDiv = `
              <div class="article">
                <div class="header">
                  ${article.heading}
                </div>  
                <div class="article-info">
                  <img src="../img/RUKUNDO  KEVIN.jpg" alt="Rukundo Kevin Image" class="user-img img-bordered">
                  <span class="username"> Rukundo Kevin </span> <br>
                  <span class="article-time">${article.date}</span>
                  <div class="article-actions ">
                    <a href="./updateArticle.html?articleId=${article.articleId}"> 
                      <button class="btn btn-small btn-n-border btn-skyblue">Update</button>
                    </a>
                      <button class="btn btn-small btn-n-border btn-red" value="${article.articleId}">Delete</button>
                  </div>
                </div>
                <div class="article-body">
                  <p> 
                    ${article.content}
                  </p>   
                </div>
                <img src="${article.image}" class="img-big">   
              </div>`;
              let doc = (parser.parseFromString(articleDiv, 'text/html')).querySelector('.article');
            document.querySelector("#content").appendChild(doc);
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


export {viewArticles};