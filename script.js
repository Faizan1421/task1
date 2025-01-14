const categoriesButton = document.getElementById('categoriesButton');
const categoriesModal = document.getElementById('categoriesModal');
const body = document.querySelector('body'); 

categoriesButton.addEventListener('click', () => {
  categoriesModal.classList.toggle('hidden');
});

body.addEventListener('click', (event) => {
  if (event.target !== categoriesButton && !categoriesButton.contains(event.target)) {
    categoriesModal.classList.add('hidden'); 
  }
});

const menuButton = document.getElementById('menuButton');
  const menuModal = document.getElementById('menuModal');
  const closeModalButton = document.getElementById('closeModal');

  menuButton.addEventListener('click', () => {
    menuModal.classList.toggle('h-[75vh]'); 
  });

  closeModalButton.addEventListener('click', () => {
    menuModal.classList.remove('h-[75vh]');
  });


   const searchInput = document.getElementById('search-input');
  const searchModal = document.getElementById('searchModal');

  searchInput.addEventListener('focus', () => {
    searchModal.classList.remove('hidden');
  });

  searchInput.addEventListener('blur', () => {
    searchModal.classList.add('hidden');
  });

//   mobile search
const searchInputMobile = document.getElementById('search-input-mobile');
const searchModalMobile = document.getElementById('searchModal-mobile');

searchInputMobile.addEventListener('focus', () => {
  searchModalMobile.classList.remove('hidden');
});

searchInputMobile.addEventListener('blur', () => {
  searchModalMobile.classList.add('hidden');
});