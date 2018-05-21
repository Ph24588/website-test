// function quickSwitch() {
//     $("#uxWork").hide();
//     $("#visualWork").show();
//     $(".descriptionContainer").animate({
//     opacity: "0"
//     }, {duration: 0, queue: false});
//     $(".switch a").text("I want to see ux work.");
// };

$("#amazonImg").hide();
$("#appleImg").hide();
$("#pupperImg").hide();
$("#agioImg").hide();
$("#beatImg").hide();
$("#cooleafImg").hide();

var bga_5 = lottie.loadAnimation({
  container: document.getElementById("beatImg"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'bga_5.json'
});

var bga_1 = lottie.loadAnimation({
  container: document.getElementById("amazonImg"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'bga_1.json'
});

var bga_2 = lottie.loadAnimation({
  container: document.getElementById("appleImg"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'bga_2.json'
});

var bga_3 = lottie.loadAnimation({
  container: document.getElementById("pupperImg"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'bga_3.json'
});

var bga_4 = lottie.loadAnimation({
  container: document.getElementById("agioImg"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'bga_4.json'
});

var bga_6 = lottie.loadAnimation({
  container: document.getElementById("cooleafImg"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'bga_6.json'
});
//change var name and elementId for every case study animation

  document.getElementById("beatBlocks").addEventListener("mouseenter", function() {
    bga_5.play();
  });
  document.getElementById("beatBlocks").addEventListener("mouseleave", function() {
    bga_5.stop();
  });

  document.getElementById("amazon").addEventListener("mouseenter", function() {
    bga_1.play();
  });
  document.getElementById("amazon").addEventListener("mouseleave", function() {
    bga_1.stop();
  });

  document.getElementById("appleMusic").addEventListener("mouseenter", function() {
    bga_2.play();
  });
  document.getElementById("appleMusic").addEventListener("mouseleave", function() {
    bga_2.stop();
  });

  document.getElementById("pupper").addEventListener("mouseenter", function() {
    bga_3.play();
  });
  document.getElementById("pupper").addEventListener("mouseleave", function() {
    bga_3.stop();
  });

  document.getElementById("agio").addEventListener("mouseenter", function() {
    bga_4.play();
  });
  document.getElementById("agio").addEventListener("mouseleave", function() {
    bga_4.stop();
  });

    document.getElementById("cooleaf").addEventListener("mouseenter", function() {
    bga_6.play();
  });
  document.getElementById("cooleaf").addEventListener("mouseleave", function() {
    bga_6.stop();
  });
//add play and stop for every case study animation

const projects = [
  {
    "el": $("#amazon"),
    "img": $("#amazonImg"),
    "type": "UX",
    "cardText":    "<p>The 1-Click Settings page was last updated almost 20 years ago. <br><br>During my time at Amazon, I was able to redesign it.</p>",
    "popoverText": "<p>The 1-Click Settings page was last updated almost 20 years ago. <br><br>During my time at Amazon, I was able to redesign it.</p>"
  },
  {
    "el": $("#appleMusic"),
    "img": $("#appleImg"),
    "type": "UX",
    "cardText":    "<p>Apple Music (AM) is unique with their signature aesthetics and features, but <br>could it be better?<br><br>I decided to take a stab at it.</p>",
    "popoverText": "<p>Apple Music (AM) is unique with their signature aesthetics and features, but <br>could it be better?<br><br>I decided to take a stab at it.</p>"
  },
  {
    "el": $("#pupper"),
    "img": $("#pupperImg"),
    "type": "UX",
    "cardText":    "<p>Pupper is a mobile based service that<br> would allow you to rent a dog for a short period of time.</p>",
    "popoverText": "<p>Have you ever wanted a dog, but without the responsibility of owning one? What if there was an app that let you rent one for a weekend, or even for an event? Pupper is an iOS application that allows you to do just that.</p>"
  },
  {
    "el": $("#agio"),
    "img": $("#agioImg"),
    "type": "UX",
    "cardText":    "<p>During the summer of 2016, a group of developers and I created a mobile app <br>that allows employees to easily use their employee discounts with fellow co-workers.</p>",
    "popoverText": "<p>Large companies typically offer an abundance of perks to their employees, but sometimes they’re scattered all over the place, making them hard to find and use. Our team created an app that allows employees to easily access all discounts and invite coworkers out to lunch.</p>"
  },
  {
    "el": $("#beatBlocks"),
    "img": $("#beatImg"),
    "type": "UX",
    "cardText":    "<p>Beat Blocks was my capstone project<br>that used computer vision to bring people<br>together by having them create music<br>with each other.</p>",
    "popoverText": "<p>Beat Blocks was my capstone project<br>that used computer vision to bring people<br>together by having them create music<br>with each other.</p>"
  },
  {
    "el": $("#cooleaf"),
    "img": $("#cooleafImg"),
    "type": "UX",
    "cardText":    "<p>Cooleaf aims to increase employee engagement using their web platform. <br><br>I designed their mobile platform.</p>",
    "popoverText": "<p>Cooleaf aims to increase employee engagement using their web platform. <br><br>I designed their mobile platform.</p>"
  }
].forEach(({el, img, cardText, popoverText}) => {
  el.mouseenter(function() {
    $(".description").html(cardText);
    img.show();
  });

  el.click(function() {
    $(".descriptionDropdown").html(popoverText);
  });
  
  el.mouseleave(function() {
    img.hide();
  }); 
});













//copy and paste a new one and change the IDs and stuff

if (window.location.hash == '#visual') {
  $("#uxWork").hide();
  $("#visualWork").show();
  $(".descriptionContainer").animate({
  opacity: "0"
  }, {duration: 0, queue: false});
  $(".switch a").text("I want to see ux work.");
} else if (window.location.hash == '#ux') {
  $("#visualWork").hide();
  $("#uxWork").show();
  $(".descriptionContainer").animate({
  opacity: "1"
  }, {duration: 0, queue: false});
  $(".switch a").text("I want to see visual work.");
};

flag = true;

function checkSwitch() {

if (flag == true) {

$(".switch").unbind().one("click", function() {

  $("#projects").animate({
    marginLeft: "+=50"
  }, {duration: 500, queue: false})
                .delay(500).animate({
    marginLeft: "-=50"
  }, {duration: 500});

  $(this).fadeOut(500).fadeIn(500);
  $("#projects").animate({
    opacity: "0"
  }, {duration: 500, queue: false})
                .animate({
    opacity: "1"
  }, {duration: 500});
  
    $(".descriptionContainer").animate({
    opacity: "0"
  }, {duration: 500, queue: false});

    setTimeout(function() {
    $("#uxWork").hide();
    $("#visualWork").show();
    $(".switch a").text("I want to see ux work.");
    $(".switch a").attr("href", "#ux");
    },500);

  flag = false;
});

} else if (flag == false) {

$(".switch").unbind().one("click", function() {

  $("#projects").animate({
    marginLeft: "+=50"
  }, {duration: 500, queue: false})
                .delay(500).animate({
    marginLeft: "-=50"
  }, {duration: 500});

  $(this).fadeOut(500).fadeIn(500);
  $("#projects").animate({
    opacity: "0"
  }, {duration: 500, queue: false})
                .animate({
    opacity: "1"
  }, {duration: 500});

    $(".descriptionContainer").delay(1000).animate({
    opacity: "1"
  }, {duration: 500});

    setTimeout(function() {
    $("#uxWork").show();
    $("#visualWork").hide();
    $(".switch a").text("I want to see visual work.");
    $(".switch a").attr("href", "#visual");
    },500);

  flag = true;
});

}};

setInterval (checkSwitch, 1000);

$(".arrow").click(function(e) {
  const isActive = $(this).hasClass("active");
  
  $(this).toggleClass("active");
  $(".arrow").not(this).removeClass("active");
  if (isActive) {
      $(".descriptionDropdown").fadeOut(500);
  } else {
      $(".descriptionDropdown").fadeIn(500);
      $(".descriptionDropdown").css({
        left: e.pageX - 220,
        top: e.pageY + 80
      });
  };
});