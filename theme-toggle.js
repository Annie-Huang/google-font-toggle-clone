const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.contains('light-theme')
    ? enableDarkMode()
    : enableLightMode();
});

function enableDarkMode() {
  document.body.classList.remove('light-theme');
  document.body.classList.add('dark-theme');
  // themeToggle.ariaLabel = 'Switch to light theme';
  themeToggle.setAttribute('aria-label', 'Switch to light theme');
}
function enableLightMode() {
  document.body.classList.remove('dark-theme');
  document.body.classList.add('light-theme');
  // themeToggle.ariaLabel = 'Switch to dark theme';
  themeToggle.setAttribute('aria-label', 'Switch to dark theme');
}

function setThemePreference() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // console.log('i like it dark.');
    enableDarkMode();
    return;
  }
  // console.log('i like it light');
  enableLightMode();
}
document.onload = setThemePreference();
