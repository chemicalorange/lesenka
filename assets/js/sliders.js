const swiper = new Swiper('.types-of-stairs__slider', {
    // Optional parameters
    spaceBetween:32,
    slidesPerView:1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      // when window width is >= 320px
      0:{
        slidesPerView:1,
      },
      // when window width is >= 480px
      787: {
        slidesPerView: 2,
    
      },
      // when window width is >= 640px
      1223: {
        slidesPerView: 3,
       
      }
    }
  });

  const swiperOne = new Swiper('.slider__left', {
    // Optional parameters
  
   

    
  });

  const swiperTwo = new Swiper('.slider__right', {
    // Optional parameters
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });

  swiperOne.controller.control = swiperTwo;
  swiperTwo.controller.control = swiperOne;

  const reviewsSlider = new Swiper('.reviews__slider', {
    // Optional parameters
   
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });