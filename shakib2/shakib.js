// Select the button and form elements
const form = document.querySelector('form');
const button = document.querySelector('button');

// Add event listener to the button
button.addEventListener('click', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the values from the input fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Validate the input fields
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }
  
  // Display a success message and clear the input fields
  alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
  form.reset();
});