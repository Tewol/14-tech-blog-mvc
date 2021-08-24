async function loginFormHandler(event) {
    event.preventDefault();
     // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    // Send a POST request to the API endpoint
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // If successful, redirect the browser to the dashboard page
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Log in failed.');
        //alert(response.statusText);
      }
    }
  };

// var el = document.getElementById('#login-form');
// if(el){
//   el.addEventListener('click', swapper, false);
// }

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

// document
//   .querySelector('.formlogin')
//   .addEventListener('submit', loginFormHandler);

// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   // Collect values from the login form
//   const username = document.querySelector('#username-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   if (username && password) {
//     // Send a POST request to the API endpoint
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ username, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       // If successful, redirect the browser to the profile page
//       document.location.replace('/blog');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#name-signup').value.trim();
//   const username = document.querySelector('#username-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   if (name && username && password) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ name, username, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/blog');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };
// document
//   .querySelector('#login-form')
//   .addEventListener('submit', loginFormHandler);
// document
//   .querySelector('#signup-form')
//   .addEventListener('submit', signupFormHandler);