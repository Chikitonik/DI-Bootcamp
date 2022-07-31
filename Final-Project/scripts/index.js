function ButtonMainCanvasClick() {
  document.getElementById('about').scrollIntoView();
}
// #region highlight nav bar links
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= (sectionTop - sectionHeight / 5)) {
      current = section.getAttribute('id')
    }
  })
  // console.log(current)
  // console.log(window.pageYOffset)
  navLi.forEach(li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active');
    }
  } )
})
// #endregion highlight nav bar links


