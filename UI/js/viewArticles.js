function viewArticles(){
     let parser = new DOMParser();


     if (articles && articles.length > 0) {
        articles.forEach(article =>{
              let articleDiv = `
              <div class="article">
                <div class="header">
                  ${article.heading}
                </div>  
                <div class="article-info">
                
                  <img src="../img/RUKUNDO  KEVIN.jpg" alt="Rukundo Kevin Image" class="user-img img-bordered">
                  <div class="article-actions ">
                  <a href="./updateArticle.html?articleId=${article.articleId}"> 
                    <button class="btn btn-small btn-n-border btn-skyblue">Update</button>
                  </a>
                    <button class="btn btn-small btn-n-border btn-red" value="${article.articleId}" id="deleteArticle">
                      Delete
                    </button>
                </div>
                  <span class="username"> Rukundo Kevin </span> <br>
                  <span class="article-time">${article.date}</span>
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

function truncateString(str) {
  return str.length > 200 ? str.slice(0, 200) + ".........." : str;
}


    function viewBlog() {

      fetch('https://rukundo-kevin-blog.herokuapp.com')
      .then(response => response.json())
      .then(data => console.log(data));

      let parser = new DOMParser();
      let articles = JSON.parse(localStorage.getItem('articles'));
  
      if (articles && articles.length > 0) {
        articles.forEach(article =>{
              let articleDiv = `
              <a href="blog-article.html?id=${article.articleId}"> 
              <div class="social skills">
                <h3 style="text-align: center;">${article.heading}</h3>
                <h5>${article.date}</h5>
                      ${truncateString(article.content)}
              </div>
            </a>`;
              let doc = (parser.parseFromString(articleDiv, 'text/html')).querySelector('a');
                
            let elementBefore = document.querySelector("div#blog.container").childNodes[3];
            elementBefore.parentNode.insertBefore(doc,elementBefore)

        })

      }else{
            let errorDiv = document.createElement('div'),
                erroDivText = document.createTextNode("No Articles Currently");
                errorDiv.appendChild(erroDivText);
                errorDiv.classList.add('error')
                errorDiv.classList.add('error-white');
                let elementBefore = document.querySelector("div#blog.container").childNodes[3];
                elementBefore.parentNode.insertBefore(errorDiv,elementBefore)
            errorDiv.style.display = 'block';
      }
    }

export {viewArticles,viewBlog};

