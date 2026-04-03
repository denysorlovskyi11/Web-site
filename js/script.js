// -----------------------------
// Підсвічування активного пункту меню та відкриття підменю
// -----------------------------
const currentPage = window.location.pathname.split("/").pop(); // поточна сторінка
const menuLinks = document.querySelectorAll('.sidebar a');

// Проходимось по всіх посиланнях меню
menuLinks.forEach(link => {
  if(link.getAttribute('href') === currentPage){
    link.classList.add('active'); // підсвічуємо активний пункт

    // Якщо цей пункт у підменю, відкриваємо його батьківське меню
    const parentSubmenu = link.closest('.has-submenu');
    if(parentSubmenu){
      parentSubmenu.querySelector('.submenu').style.display = 'block';
    }
  }
});

// -----------------------------
// Опціонально: сховати підменю при кліку на інші сторінки, не в навчальних матеріалах
// -----------------------------
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    const parentSubmenu = link.closest('.has-submenu');
    if(!parentSubmenu){
      // Ховаємо всі підменю
      document.querySelectorAll('.submenu').forEach(sub => {
        sub.style.display = 'none';
      });
    }
  });
});
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});




// -----------------------------
// Меню "Практика" по кліку + підсвічування
// -----------------------------
const practiceToggle = document.getElementById('practice-toggle');
const practiceSubmenu = document.getElementById('practice-submenu');

if (practiceToggle && practiceSubmenu) {

  practiceToggle.addEventListener('click', function(e) {
    e.preventDefault();
    practiceSubmenu.classList.toggle('open');
  });

  // Підсвічування активної практики
  const practiceItems = document.querySelectorAll('.practice-item');

  practiceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {

      // прибрати активний клас з усіх
      practiceItems.forEach(i => i.classList.remove('active-practice'));

      // додати активний
      item.classList.add('active-practice');
    });
  });
}





// Плавне відкриття підменю практики (з затримкою)
// -----------------------------
const practiceItems = document.querySelectorAll('.practice-item');

let hoverTimeout;

practiceItems.forEach(item => {

  item.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimeout);

    hoverTimeout = setTimeout(() => {
      practiceItems.forEach(i => i.classList.remove('active-practice'));
      item.classList.add('active-practice');
    }, 200); // затримка 200мс
  });

  item.addEventListener('mouseleave', () => {
    clearTimeout(hoverTimeout);
  });

});



// -----------------------------
// Плавне відкриття підменю практики БЕЗ накладання
// -----------------------------
const practiceItems = document.querySelectorAll('.practice-item');

let openTimeout;
let closeTimeout;

practiceItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    clearTimeout(closeTimeout);
    clearTimeout(openTimeout);

    // одразу закриваємо всі інші
    practiceItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active-practice');
      }
    });

    // і з невеликою затримкою відкриваємо поточний
    openTimeout = setTimeout(() => {
      item.classList.add('active-practice');
    }, 120);
  });

  item.addEventListener('mouseleave', () => {
    clearTimeout(openTimeout);

    closeTimeout = setTimeout(() => {
      item.classList.remove('active-practice');
    }, 120);
  });
});







