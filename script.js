


jQuery(function () {
  jQuery('#payment-solution').click(function () {

    jQuery('.list-default-content').hide();
    jQuery('.sol-payments').show();

  });
});


if ($(window).width() <= 767) {
  jQuery(function () {
    jQuery('#btn').click(function () {
      jQuery('.main-nav').show();
      jQuery('#cancel').show();
      jQuery('#btn').hide();
    });
  });
}



if ($(window).width() <= 767) {
  jQuery(function () {
    jQuery('.MainMenu').click(function () {
      jQuery('.menu-list-content').hide();

    });
  });
}

// var window_size = window.matchMedia('(max-width: 768px)');

// jQuery(function(){
//     jQuery('.MainMenu').click(function(){
//           // jQuery('.main-nav').show();
//           jQuery('.menu-list-content').hide();

//         });
//       });
//header level two

// function mediaQuery(){
//   let screenWidth = $(document).width();
//   console.log("hwllo");
//   if(screenWidth<767){
//  console.log("hwllo1");
//     $('.menu-list-content').show();
//     $('.menu-list-resources').hide();   //generic....
//     $('.menu-list-our-network').hide();
//     $('.menu-list-insights').hide();
//     $('.menu-list-contact-us').hide();

//   }
//   $('.menu-list').click(mediaQuery)

// }


if (window.matchMedia('(max-width: 768px)').matches) {
  jQuery(function () {
    jQuery('.menu-list').click(function () {
      jQuery('.menu-list-content').show();

      jQuery('.menu-list-resources').hide();
      jQuery('.menu-list-our-network').hide();
      jQuery('.menu-list-insights').hide();
      jQuery('.menu-list-contact-us').hide();
      jQuery('.list-default-content').hide();
      // jQuery('.sol-payments').hide();
    });
  });
}
else {
  jQuery('.menu-list').show();
  jQuery('.menu-list-resources').show();
  jQuery('.menu-list-our-network').show();
  jQuery('.menu-list-insights').show();
  jQuery('.menu-list-contact-us').show();
}

if (window.matchMedia('(max-width: 768px)').matches) {
  jQuery(function () {
    jQuery('#payment-solution').click(function () {
      jQuery('.sol-payments').show();

      jQuery('#sol-overview').hide();
      jQuery('#sol-acceptance').hide();
      jQuery('#sol-fraud').hide();
      jQuery('#sol-pci').hide();
      jQuery('#sol-commerce').hide();
      jQuery('#sol-card').hide();
      jQuery('#sol-enterprise').hide();
      jQuery('#sol-debit').hide();
      jQuery('#sol-collabaration').hide();
      jQuery('#sol-technology').hide();

      jQuery('.pay-sol').hide();
      jQuery('.third-level-heading').show();
      jQuery('.sol').show();
      jQuery('.list-content-heading').hide();
      jQuery('.MainMenu').hide();
    });
  });
}
// else{
//     jQuery('.menu-list').show();
//     jQuery('.menu-list-resources').show();
//             jQuery('.menu-list-our-network').show();
//             jQuery('.menu-list-insights').show();
//             jQuery('.menu-list-contact-us').show(); 
// }





