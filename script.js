const sideMenu = document.querySelector('#sideMenu');
const openMenu = () => {
  sideMenu.style.transform = "translateX(-16rem)";
};

const closeMenu = () => {
  sideMenu.style.transform = "translateX(16rem)";
};

if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
}else {
  document.documentElement.classList.remove('dark')
}

const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')

  if( document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark'
  }else {
    localStorage.theme = 'light'
  }
}