import { generateId } from './generateId.js';
function displayError(message){
    document.querySelector('div.error').innerHTML = message;
    document.querySelector('div.error').style.display = 'block';
}

function signup(username,password){
     let temp = JSON.parse(localStorage.getItem('users'));
      let   users = temp ? temp : [];

     const newUser = {
        userId: `${username.replace(/\s+/g, '')}-${generateId()}`,
        username :username,
        password : password,
        loggedIn: false,
        type:'user'
     }
     
     const admin = {
        userId: `rukundokevin-${generateId()}`,
        username :'Rukundo Kevin',
        password : 'Kenneth11',
        loggedIn: false,
        type:'admin'
     }

     users.push(newUser);
    //  users.push(admin)
    localStorage.setItem( "users", JSON.stringify(users));
    console.log(users)
    alert("Signed Up Successful");
    window.location= 'sign-in.html';
}

function signin(username,password){
    let c = 0;
    let users = JSON.parse(localStorage.getItem('users'));
     if (users && users.length > 0) {
       users.forEach(user =>{
           if (user.username == username && user.password == password) {
               c++;
               alert('Logged in successfully');
               user.loggedIn = true;
               localStorage.setItem( "users", JSON.stringify(users));

              user.type == 'user'? window.location = 'index.html' : window.location = 'owner/index.html'
           }
       })
      c == 0? displayError('Invalid credentials'): '';
     }else{
        console.log(c == 0)
        displayError('Invalid credentials')
     }
}
export { signup,signin }; 