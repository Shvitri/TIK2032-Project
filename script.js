let header = document.querySelector('header');

// Mode Red
document.addEventListener('DOMContentLoaded', function () {
  const graymode = document.getElementById('graymode');

  graymode.addEventListener('click', function () {
    if (graymode.textContent === '🌙') {
      graymode.textContent = '☀️';
      document.body.classList.add('active');
    } else {
      graymode.textContent = '🌙';
      document.body.classList.remove('active');
    }
  });
});
