function ButtonMainCanvasClick() {
  document.getElementById('about').scrollIntoView();
}
// #region scroll listener
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .nav-link');
const animation = document.querySelectorAll('.slide-from-right, .slide-from-left, .flip-appear');
// highlight nav bar links
window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= (sectionTop - sectionHeight / 5)) {
      currentSection = section.getAttribute('id')
    }
    
  })
    // console.log(window.pageYOffset)
    // console.log(currentSection)
  navLi.forEach(li => {
    li.classList.remove('active');
    if(li.classList.contains(currentSection)){
      li.classList.add('active');
    }
  } )
// add class animated
  animation.forEach(element => {
    const elementTop = element.offsetTop;
    var windowHeight = $(window).height()
    // console.log("windowHeight:", windowHeight)
    // console.log("elementTop:", elementTop)
    // console.log("window.pageYOffset:", window.pageYOffset)
      if (window.pageYOffset >= (elementTop - windowHeight * .3)) {
      element.classList.add('animated');
      element.classList.remove('hidden');
    }
  })

})



