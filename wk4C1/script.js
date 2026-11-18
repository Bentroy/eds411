    const form = document.getElementById('loginForm');
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (form.checkValidity()) alert('Form is valid.');
      form.classList.add('was-validated');
    });

    // Show / hide password
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.getElementById('togglePassword');

    toggleBtn.addEventListener('click', () => {
      const isHidden = passwordInput.type === 'password';
      passwordInput.type = isHidden ? 'text' : 'password';
      toggleBtn.classList.toggle('active', isHidden);
      toggleBtn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
      toggleBtn.setAttribute('aria-pressed', String(isHidden));
    });