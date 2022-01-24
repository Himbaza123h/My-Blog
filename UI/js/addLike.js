

function  getLikes(id) {
    let temp = JSON.parse(localStorage.getItem('likes')),
    likes = temp ? temp : [],
    articleLikes = 0;


    likes.forEach(like =>{
    (like.articleId == id)?articleLikes++:'';
    })
   return articleLikes;
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


function addLike(id,userId,likeEl) {
    let temp = JSON.parse(localStorage.getItem('likes')),
         likes = temp ? temp : [],
         articleLikes = 0,
         c= 0;
   
         //first remove the dislike
         let tempDislike = JSON.parse(localStorage.getItem('dislikes'));
         let   dislikes = tempDislike ? tempDislike : [];
   
           dislikes.forEach((dislike,idx)=>{
               if(dislike.userId == userId && dislike.articleId == id){
                   dislikes.splice(idx,1);
               }
           })
           localStorage.setItem( "dislikes", JSON.stringify(dislikes)); 

         
    likes.forEach(like =>{
         (like.userId == userId && like.articleId == id)?c++:'';
    })

    if (c == 0) {
        const newLike = {
            articleId :id,
            userId:userId
         }
    
        likes.push(newLike);
        localStorage.setItem( "likes", JSON.stringify(likes));  
    }

    document.querySelector("#likeNumber").innerHTML = getLikes(id);
    document.querySelector("#dislikeNumber").innerHTML = getDislike(id);

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


export {addLike,addDislike,getLikes,getDislike}