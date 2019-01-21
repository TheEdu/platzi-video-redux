const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
}

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);