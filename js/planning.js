document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelectorAll('.details');
  
    details.forEach(element => {
      const summary = element.querySelector('.details__summary');
      const content = element.querySelector('.details__content');
  
      summary.addEventListener('click', e => {
        e.preventDefault();
        if (element.open) {
          const openDetails = content.animate(
            {
              opacity: [1, 0],
              height: [content.offsetHeight + 'px', 0],
            },
            {
              duration: 360,
              easing: 'ease-out',
            }
          );
          openDetails.onfinish = () => {
            element.removeAttribute('open');
          }
        } else {
          element.setAttribute('open', 'true');
          const openDetails = content.animate(
            {
              opacity: [0, 1],
              height: [0, content.offsetHeight + 'px'],
            },
            {
              duration: 360,
              easing: 'ease-out',
            }
          );
        }
      });
    });
  });


  $(document).ready(function() {
    var pagetop = $('.pagetop');
      $(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
              pagetop.fadeIn();
         } else {
              pagetop.fadeOut();
              }
         });
         pagetop.click(function () {
             $('body, html').animate({ scrollTop: 0 }, 500);
                return false;
     });
  });

  window.addEventListener("load", function() {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("fade-out");

    // フェードアウトが完了したらロード画面を非表示に
    setTimeout(function() {
        loadingScreen.style.display = "none";
    }, 2000); // フェードアウトの時間（1秒）
});

// ロードの進行をシミュレート
let progressPercentage = 0;
const interval = setInterval(() => {
if (progressPercentage < 100) {
progressPercentage += 10;
updateProgress(progressPercentage);
} else {
clearInterval(interval);
}
}, 500);