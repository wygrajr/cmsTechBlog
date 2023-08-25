const updateHandler = async (event) => {
  if (event.target.getAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
};
  
const deleteHandler = async (event) => {
  if (event.target.getAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    event.preventDefault();
  
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
  }
};

document
    .querySelector('#update')
    .addEventListener('click', updateHandler);

document
    .querySelector('#delete')
    .addEventListener('click', deleteHandler);
  