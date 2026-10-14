// ===== Site settings: edit this file to change how the site behaves =====
const SITE_CONFIG = {
  // Password page. true = visitors must enter the password. false = site opens normally.
  passwordProtected: true,

  // The password is NOT stored here, only a scrambled version (SHA-256 of salt + password).
  // To change the password, see "Changing the password" in README.md.
  passwordSalt: 'olivia-portfolio',
  passwordHash: '167afaa7bfad87f3659c29b76df897b925d9377c8e71af11c712f2a116378841',

  // Theme shown to first-time visitors: 'dark' or 'light'
  defaultTheme: 'dark'
};

// Apply the saved (or default) theme right away so the page never flashes the wrong colors.
(function () {
  var t = SITE_CONFIG.defaultTheme;
  try { t = localStorage.getItem('portfolio-theme') || t; } catch (e) {}
  document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : 'dark');
})();
