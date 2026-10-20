// ===== Site settings: edit this file to change how the site behaves =====
const SITE_CONFIG = {
  // Password page. true = visitors must enter the password. false = site opens normally.
  passwordProtected: true,

  // The password is NOT stored here, only a scrambled version (SHA-256 of salt + password).
  // To change the password, see "Changing the password" in README.md.
  passwordSalt: 'olivia-portfolio',
  passwordHash: '354854e0111812ef6110139847f5889312ab47569af2c4adb94abb0136dde7f7',

  // Theme shown to first-time visitors: 'dark' or 'light'
  defaultTheme: 'dark'
};

// Apply the saved (or default) theme right away so the page never flashes the wrong colors.
(function () {
  var t = SITE_CONFIG.defaultTheme;
  try { t = localStorage.getItem('portfolio-theme') || t; } catch (e) {}
  document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : 'dark');
})();
