const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const title = document.querySelector('#email-login').value.trim();
  const content = document.querySelector('#password-login').value.trim();

  if (title && content) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/posts/', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
