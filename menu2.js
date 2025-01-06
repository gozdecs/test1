// Dinamik menü elemanları
const menuItems = ['Anasayfa', 'Hakkında', 'Hizmetler', 'İletişim'];

// Menü ve hamburger elementi
const menu = document.getElementById('menu');
const hamburger = document.querySelector('.hamburger');

// Menü elemanlarını döngü ile oluştur
menuItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => {
        alert(`${item} seçildi!`);
    });
    menu.appendChild(li);
});

// Hamburger menüye tıklama işlemi
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Tıklayınca Menü Kapatma
menu.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
        menu.classList.remove('show'); // Menü kapatılır
    });
});

// Dışarıya Tıklayınca Menü Kapatma
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('show'); // Menü kapatılır
    }
});
