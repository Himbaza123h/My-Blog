function deleteArticle(articleId) {
    let res = confirm("Do you really want to delete this article?"),
        bearer = `Bearer ${localStorage.getItem("token")}`;
      if (res) {
        fetch(`https://rukundo-kevin-blog.herokuapp.com/article/${articleId}`, {
            method: 'DELETE',
            headers: {
              'Authorization': bearer
            }
            }).then(res => {
                if (res.ok) {
                    alert("The article Deleted successfully");
                    window.location= 'index.html';
                }
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export {deleteArticle}