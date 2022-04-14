function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  $('.latest-work-slider').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    responsive: [
        {
        breakpoint: 1440,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
        },
        {
        breakpoint: 1280,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
        },
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
        },
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
        },
        {
        breakpoint: 576,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
        },
        {
        breakpoint: 420,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
        }
    ]
    });

    $('.hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            }
        ]
    });

   
    const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})






    
        