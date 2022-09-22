function myFunction(id) {
    var mId = 'm'+id.substring(1)
    var x = document.getElementById(mId);
    var y = document.getElementsByClassName('mainText')
    for (let i = 0; i < y.length; i++) {
        y[i].classList.add('hided')
      }
    x.classList.remove('hided')

  }