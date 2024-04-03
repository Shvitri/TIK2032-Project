let header = document.querySelector('header');

// Mode Red
document.addEventListener('DOMContentLoaded', function () {
  const redmode = document.getElementById('redmode');

  redmode.addEventListener('click', function () {
    if (redmode.textContent === '🌙') {
      redmode.textContent = '☀️';
      document.body.classList.add('active');
    } else {
      redmode.textContent = '🌙';
      document.body.classList.remove('active');
    }
  });
});
