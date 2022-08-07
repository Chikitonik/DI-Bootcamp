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
// #endregion scroll listener

// #region tabs
function activateTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove('animated');
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add('animated');
  evt.currentTarget.className += " active";
}
// #endregion tabs
