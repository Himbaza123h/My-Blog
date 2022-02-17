import { generateId } from './generateId.js';
function displayError(message){
    document.querySelector('div.error').innerHTML = message;
    document.querySelector('div.error').style.display = 'block';
}

function signup(username,password){
     const newUser = {
        email :username,
        password : password,
     }

     fetch('https://rukundo-kevin-blog.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      }).then(res => {
          if(res.ok){
            alert("Signed Up Successful");
            window.location= 'sign-in.html';
          }
      }).catch((err)=>{
          alert("problem connecting to the server")
      })
}

function signin(username,password){
  
    const user = {
        email :username,
        password : password,
     }

     fetch('https://rukundo-kevin-blog.herokuapp.com/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }).then(res => {
          if(!res.ok){
           return  displayError('Invalid credentials')
          }
           return res.json();
      }).then(user=>{
            localStorage.setItem("token",user.token)
            localStorage.setItem("userType",user.type)

            alert("Logged In Successfully");
            user.type == 'admin' ? (window.location = 'owner/index.html') : (window.location = 'index.html' );
      })
    .catch((err)=>{
        displayError('Invalid credentials')
    })
}
export { signup,signin }; 