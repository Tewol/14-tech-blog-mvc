async function loginFormHandler(event) {
  event.preventDefault();
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