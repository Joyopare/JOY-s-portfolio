
const preloader=document.querySelector('.preloader');
const page=document.querySelector('.app');
window.addEventListener('load',()=>{
  setTimeout(()=>{
  preloader.classList.add('hidden');
  page.classList.remove('hidden')
  },3500);
});
  