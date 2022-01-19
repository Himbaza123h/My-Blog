import {viewArticles, viewBlog} from './viewArticles.js';
import {fetchUpdateArticle,updateArticle} from './updateArticle.js';
import {deleteArticle} from './deleteArticle.js'
import {viewQueries} from './viewQueries.js'
document.addEventListener("DOMContentLoaded",function(){
    switch (document.body.id) {
         case 'updateArticleFile':
          let img ;
                 
               document.querySelector("#article-image").addEventListener("change",function(){
               const reader = new FileReader();

               reader.addEventListener("load",() =>{
                    img = reader.result;
               });

               reader.readAsDataURL(this.files[0]);
               })
               
              fetchUpdateArticle();   
               document.querySelector("#update-article-form").addEventListener("submit",function (e) {
                     e.preventDefault();
                     updateArticle(img);
               })
         break;
         
         case 'viewArticlesFile':
              viewArticles();
            document.addEventListener("click",function (e) {
                 if(e.target.id == 'deleteArticle'){
                    deleteArticle( e.target.value);
                 }
            })
         break;
         case 'home':
             viewBlog();
         break;
         case 'viewQueriesFile':
              viewQueries();
         break;
         default:
              break;
    }

  })

