
if (document.cookie == "true") {
  quickSwitch();
};

function quickSwitch() {
    $("#uxWork").hide();
    $("#visualWork").show();
    $(".descriptionContainer").animate({
    opacity: "0"
    }, {duration: 0, queue: false});
    $(".switch a").text("I want to see ux work.");
};

$("#amazonImg").hide();
$("#appleImg").hide();
$("#pupperImg").hide();
$("#agioImg").hide();
$("#ugahacksImg").hide();
$("#cooleafImg").hide();

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

var bga_5 = lottie.loadAnimation({
  container: document.getElementById("ugahacksImg"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'bga_5.json'
});

var bga_6 = lottie.loadAnimation({
  container: document.getElementById("cooleafImg"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'bga_6.json'
});
//change var name and elementId for every case study animation

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

  // document.getElementById("ugahacks").addEventListener("mouseenter", function() {
  //   bga_5.play();
  // });
  // document.getElementById("ugahacks").addEventListener("mouseleave", function() {
  //   bga_5.stop();
  // });

    document.getElementById("cooleaf").addEventListener("mouseenter", function() {
    bga_6.play();
  });
  document.getElementById("cooleaf").addEventListener("mouseleave", function() {
    bga_6.stop();
  });
//add play and stop for every case study animation

$("#amazon").mouseenter(function() {
  $(".description").empty().html("<p>The 1-Click Settings page was last updated almost 20 years ago. <br><br>During my time at Amazon, I was able to redesign it.</p>");
  $("#amazonImg").show();
}).click(function() {
    $(".descriptionDropdown").empty().html("<p>The 1-Click Settings page was last updated almost 20 years ago. <br><br>During my time at Amazon, I was able to redesign it.</p>");
}).mouseleave(function() {
  $("#amazonImg").hide();
});

$("#appleMusic").mouseenter(function() {
  $(".description").empty().html("<p>Apple Music (AM) is unique with their signature aesthetics and features, but <br>could it be better?<br><br>I decided to take a stab at it.</p>");
  $("#appleImg").show();
}).click(function() {
    $(".descriptionDropdown").empty().html("<p>Apple Music (AM) is unique with their signature aesthetics and features, but <br>could it be better?<br><br>I decided to take a stab at it.</p>");
}).mouseleave(function() {
  $("#appleImg").hide();
});

$("#pupper").mouseenter(function() {
  $(".description").empty().html("<p>Pupper is a mobile based service that<br> would allow you to rent a dog for a short period of time.</p>");
  $("#pupperImg").show();
}).mouseleave(function() {
  $("#pupperImg").hide();
});

$("#agio").mouseenter(function() {
  $(".description").empty().html("<p>During the summer of 2016, a group of developers and I created a mobile app <br>that allows employees to easily use their employee discounts with fellow co-workers.</p>");
  $("#agioImg").show();
}).mouseleave(function() {
  $("#agioImg").hide();
});

$("#ugahacks").mouseenter(function() {
  $(".description").empty().html("<p>We started UGAHacks to cultivate the <br>passion and abilities of students with the maker mentality. <br><br>As a part of this initiative, we established <br>a brand.</p>");
  $("#ugahacksImg").show();
}).mouseleave(function() {
  $("#ugahacksImg").hide();
});

$("#cooleaf").mouseenter(function() {
  $(".description").empty().html("<p>Cooleaf aims to increase employee engagement using their web platform. <br><br>I designed their mobile platform.</p>");
  $("#cooleafImg").show();
}).mouseleave(function() {
  $("#cooleafImg").hide();
});
//copy and paste a new one and change the IDs and stuff

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

  // document.querySelector(".descriptionContainer").style.display = "none";

    setTimeout(function() {
    $("#uxWork").hide();
    $("#visualWork").show();
    $(".switch a").text("I want to see ux work.");
    },500);

  flag = false;

  document.cookie = "true";

  // alert(document.cookie);
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
    },500);

  flag = true;

  document.cookie = "false";
});

}};

setInterval (checkSwitch, 1000);

var i = 0;

$(".arrow").click(function(e) {
  if (i % 2 === 0) {
      $(this).css("transform","rotateZ(180deg)")
      $(".descriptionDropdown").fadeIn(500);
      $(".descriptionDropdown").css({
        left:e.pageX - 220,
        top:e.pageY + 80
        });
      i++
  } else {
      $(this).css("transform","rotateZ(0deg)")
      $(".descriptionDropdown").fadeOut(500);
      i++
  };
});