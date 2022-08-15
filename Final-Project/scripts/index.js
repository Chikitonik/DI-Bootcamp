function ButtonMainCanvasClick() {
  document.getElementById('about').scrollIntoView();
}
// #region scroll listener
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .nav-link');
const animation = document.querySelectorAll('.slide-from-right, .slide-from-left, .flip-appear, .gallery-card');
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
    if (li.classList.contains(currentSection)) {
      li.classList.add('active');
    }
  })
  // add class animated
  animation.forEach(element => {
    const elementTop = element.offsetTop;
    var windowHeight = $(window).height()
    // console.log("windowHeight:", windowHeight)
    // console.log("elementTop:", elementTop)
    // console.log("window.pageYOffset:", window.pageYOffset)
    if (window.pageYOffset >= (elementTop - windowHeight * .2)) {
      element.classList.add('animated');
      element.classList.remove('hidden');
    }
  })

})
// #endregion scroll listener

// #region tabs
function activateTab(evt, tabName) {
  var i, allGalleryCards, tablinks, selectedGalleryCards;
  
  allGalleryCards = document.getElementsByClassName("gallery-card");

  for (i = 0; i < allGalleryCards.length; i++) {
    allGalleryCards[i].style.display = "none";
    allGalleryCards[i].classList.remove('animated');
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  selectedGalleryCards = document.getElementsByClassName(tabName);
  for (i = 0; i < selectedGalleryCards.length; i++) {
    selectedGalleryCards[i].style.display = "block";
    selectedGalleryCards[i].classList.add('animated');
  }
  evt.currentTarget.className += " active";
}
// #endregion tabs

// #region dynamic modal carousel
function ButtonCardClick(clicked_id) {
  var image_caption = "";
  image_caption = image_caption.concat("img/projects/", clicked_id);

  document.getElementById("carousel-item-img-1").src = ""
  document.getElementById("carousel-item-img-2").src = ""
  document.getElementById("carousel-item-img-3").src = ""
  document.getElementById("modal-footer-title").innerText = ""
  document.getElementById("modal-footer-text").innerText = ""
  try {
    document.getElementById("carousel-item-img-1").src = image_caption.concat("_1.png");
    document.getElementById("carousel-item-img-2").src = image_caption.concat("_2.png");
    document.getElementById("carousel-item-img-3").src = image_caption.concat("_3.png");
    // document.getElementById("modal-footer-title").innerText = document.getElementById(clicked_id.concat("-description-title")).textContent;
    document.getElementById("modal-footer-title").append(document.getElementById(clicked_id.concat("-description-title")).innerHTML);
    // document.getElementById("modal-footer-text").innerText = document.getElementById(clicked_id.concat("-description-text")).textContent;
    document.getElementById("modal-footer-text").innerHTML = document.getElementById(clicked_id.concat("-description-text")).innerHTML;
  }
  catch (e) {
    console.log("check for errors in fields of card id:", clicked_id);
  }
}
// #endregion dynamic modal carousel