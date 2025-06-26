document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0); 
  const loader = document.querySelector('.loader');
  const logo = document.querySelector('.logo-glitch');

  // ロゴをフェードイン
  logo.style.opacity = '1';

  // 1.5秒後にフェードアウト
  setTimeout(() => {
    logo.style.opacity = '0';
  }, 1500);

  // 背景をその後フェードアウト（文字が消えた後）
  setTimeout(() => {
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = '0';
  }, 2500);

  // 最後にローディング画面を消す
  setTimeout(() => {
    loader.style.display = 'none';
    document.querySelector('.hero-content').style.opacity = 1;
  }, 3200);
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // 一度表示されたら監視を停止
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});



  // メニュー開閉
  const menuToggle = document.getElementById("menu-toggle");
  const overlayMenu = document.getElementById("overlay-menu");

  menuToggle.addEventListener("click", () => {
    overlayMenu.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });

  // メニュークリックで閉じる
  const menuLinks = overlayMenu.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      overlayMenu.classList.remove("open");
      menuToggle.classList.remove("open");
    });
  });

  window.addEventListener("load", () => {
    document.querySelectorAll(".hero-content, .title, .subtitle, section").forEach(el => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "opacity 1s ease, transform 1s ease";
    });
  });

  function toggleForm() {
    const form = document.getElementById('form-container');
    form.classList.toggle('show');
  }
  
  