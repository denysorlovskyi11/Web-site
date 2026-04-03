// -----------------------------
// Підсвічування активного пункту меню та відкриття підменю
// -----------------------------
const currentPage = window.location.pathname.split("/").pop(); // поточна сторінка
const menuLinks = document.querySelectorAll('.sidebar a');

// Проходимось по всіх посиланнях меню
menuLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active'); // підсвічуємо активний пункт

    // Якщо цей пункт у підменю, відкриваємо його батьківське меню
    const parentSubmenu = link.closest('.has-submenu');
    if (parentSubmenu) {
      const submenu = parentSubmenu.querySelector('.submenu');
      if (submenu) {
        submenu.style.display = 'block';
      }
    }
  }
});

// -----------------------------
// Опціонально: сховати підменю при кліку на інші сторінки, не в навчальних матеріалах
// -----------------------------
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    const parentSubmenu = link.closest('.has-submenu');
    if (!parentSubmenu) {
      // Ховаємо всі підменю
      document.querySelectorAll('.submenu').forEach(sub => {
        sub.style.display = 'none';
      });
    }
  });
});

// -----------------------------
// Ефект зменшення header при скролі
// -----------------------------
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  }
});








