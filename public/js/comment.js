const commentHandler = async (event) => {
  if (event.target.getAttribute('data-id')) {
    const post_id = event.target.getAttribute('data-id');
    event.preventDefault();

    const content = document.querySelector('#content').value.trim();

    if (content) {
      const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert(response.statusText);
      }
    }
  }
};

document
  .querySelector('#comment')
  .addEventListener('click', commentHandler);
