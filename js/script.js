        group.classList.remove('active');
      }
    });

    currentGroup.classList.toggle('active');
  });
});

// -----------------------------
// Header shrink при скролі
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
