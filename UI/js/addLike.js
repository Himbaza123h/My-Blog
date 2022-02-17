
function displayLikes(article){
    const comments = fetch(`https://rukundo-kevin-blog.herokuapp.com/like/article/${article}`)
     .then(response => {
       if(response.ok){
        return response.json()
       }
     })
     .then(likes => { 

        document.querySelector("#likeNumber").innerHTML =likes.likes;
       // document.querySelector("#dislikeNumber").innerHTML = getDislike(id);
     })
     .catch((err)=>{
        console.log(err)
     })
     return comments;
   }
   

function  getDislike(id) {
    let temp = JSON.parse(localStorage.getItem('dislikes')),
    dislikes = temp ? temp : [],
    articleDislikes = 0;

    dislikes.forEach(like =>{
    (like.articleId == id)?articleDislikes++:'';
    })
   return articleDislikes;
}


function addLike(id,likeEl) {

    const newLike = {
        articleId :id,
     }
    let  bearer = `Bearer ${localStorage.getItem("token")}`;
  
     fetch('https://rukundo-kevin-blog.herokuapp.com/like', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': bearer
        },
        body: JSON.stringify(newLike)
        }).then(res => {
           if(res.status == 405){
               alert("You have already liked this article")
           }
            displayLikes(id);
        }).catch((err)=>{
            alert("Problem connecting to the server")
            console.log(err)
        })
}

function addDislike(id,userId,likeEl) {
    let temp = JSON.parse(localStorage.getItem('dislikes')),
         dislikes = temp ? temp : [],
         articledislikes = 0,
         c= 0;
   
         //first remove the like
         let templike = JSON.parse(localStorage.getItem('likes'));
         let   likes = templike ? templike : [];
   
           likes.forEach((like,idx)=>{
               if(like.userId == userId && like.articleId == id){
                   likes.splice(idx,1);
               }
           })
           localStorage.setItem( "likes", JSON.stringify(likes));  

    dislikes.forEach(like =>{
         (like.userId == userId && like.articleId == id)?c++:'';
    })

    if (c == 0) {
        const newDislike = {
            articleId :id,
            userId:userId
         }
    
        dislikes.push(newDislike);
        localStorage.setItem( "dislikes", JSON.stringify(dislikes));  
    }
    document.querySelector("#likeNumber").innerHTML = getLikes(id);

    document.querySelector("#dislikeNumber").innerHTML = getDislike(id);
}


export {addLike,addDislike,displayLikes,getDislike}