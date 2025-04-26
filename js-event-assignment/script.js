// Button Click Event
document.getElementById('magic-btn').addEventListener('click', () => {
  const btn = document.getElementById('magic-btn');
  btn.textContent = "You clicked me!";
  btn.style.backgroundColor = "#03dac6";
});

// Double Click Secret Event
document.getElementById('secret-btn').addEventListener('dblclick', () => {
  alert('🎉 Secret unlocked!');
});

// Hover Effect
const secretBtn = document.getElementById('secret-btn');
secretBtn.addEventListener('mouseover', () => {
  secretBtn.style.transform = 'scale(1.1)';
});
secretBtn.addEventListener('mouseout', () => {
  secretBtn.style.transform = 'scale(1)';
});

// Keypress Detection
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    alert('Enter key pressed!');
  }
});

// Image Gallery
const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg"
];

let currentImg = 0;

document.getElementById('next-img').addEventListener('click', () => {
  currentImg = (currentImg + 1) % images.length;
  document.getElementById('gallery-img').src = images[currentImg];
});

// Tabs
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(btn => {
  btn.addEventListener('click', () => {
    tabContents.forEach(tc => tc.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// Form Validation
const form = document.getElementById('signup-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email === '' || password === '') {
    feedback.textContent = "Please fill in all fields.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = "Invalid email format.";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  feedback.style.color = 'green';
  feedback.textContent = "Form submitted successfully!";
});

// Real-time Feedback
document.getElementById('email').addEventListener('input', () => {
  feedback.textContent = '';
});
document.getElementById('password').addEventListener('input', () => {
  feedback.textContent = '';
});
