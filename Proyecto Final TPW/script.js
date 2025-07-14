// Menú hamburguesa
const hamburguesa = document.getElementById('hamburguesa');
const nav = document.getElementById('nav');

hamburguesa.addEventListener('click', () => {
  nav.querySelector('ul').classList.toggle('show');
});

// Modal de bienvenida
const welcomeModal = document.getElementById('welcomeModal');
const closeWelcomeModal = document.getElementById('closeWelcomeModal');

window.onload = () => {
  welcomeModal.style.display = 'block';
};

closeWelcomeModal.onclick = () => {
  welcomeModal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === welcomeModal) {
    welcomeModal.style.display = 'none';
  }
};

// Modal de contacto
const openContactForm = document.getElementById('openContactForm');
const contactModal = document.getElementById('contactModal');
const closeContactModal = document.getElementById('closeContactModal');

openContactForm.addEventListener('click', () => {
  contactModal.style.display = 'block';
});

closeContactModal.onclick = () => {
  contactModal.style.display = 'none';
};

window.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = 'none';
  }
});

// Validación del formulario
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  alert('Formulario enviado correctamente.');
  form.reset();
  contactModal.style.display = 'none';
});