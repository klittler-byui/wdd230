let bannerDay = new Date().getDay();
const banner = document.querySelector('#banner');
if (bannerDay === 3 || bannerDay === 2){
banner.style.display = 'block';
} else{
banner.style.display = 'none';
}
const close = document.querySelector('#close');
close.addEventListener('click', () => {
banner.style.display = 'none';
})