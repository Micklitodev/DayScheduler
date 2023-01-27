var buttonEl = $(".btn");
var HeaderEl = $("#currentDay");

$(document).ready(function () {
  var buttonEl = $(".btn");

  $(function () {
    buttonEl.on("click", function () {
      var target = $(this).parent().children().eq(1).val();
      if ($(this).parent().attr("id") === "hour-9") {
        localStorage.setItem("hr9", target);
        console.log("bigfuckingbrainboi");
      } else if ($(this).parent().attr("id") === "hour-10") {
        localStorage.setItem("hr10", target);
        console.log("massivebrainnoodlechamp");
      } else if ($(this).parent().attr("id") === "hour-11") {
        localStorage.setItem("hr11", target);
        console.log("just the biggest fking brains ever");
      } else if ($(this).parent().attr("id") === "hour-12") {
        localStorage.setItem("hr12", target);
        console.log("MONGO LARGE BRAIN BOI");
      } else if ($(this).parent().attr("id") === "hour-1") {
        localStorage.setItem("hr1", target);
      } else if ($(this).parent().attr("id") === "hour-2") {
        localStorage.setItem("hr2", target);
      } else if ($(this).parent().attr("id") === "hour-3") {
        localStorage.setItem("hr3", target);
      } else if ($(this).parent().attr("id") === "hour-4") {
        localStorage.setItem("hr4", target);
      } else if ($(this).parent().attr("id") === "hour-5") {
        localStorage.setItem("hr5", target);
      }
    });
  });

  $(function renderInput() {
    var currenthr9 = localStorage.getItem("hr9");
    buttonEl.parent().children().eq(1).text(currenthr9);

    var currenthr10 = localStorage.getItem("hr10");
    buttonEl.parent().children().eq(4).text(currenthr10);

    var currenthr11 = localStorage.getItem("hr11");
    buttonEl.parent().children().eq(7).text(currenthr11);

    var currenthr12 = localStorage.getItem("hr12");
    buttonEl.parent().children().eq(10).text(currenthr12);

    var currenthr1 = localStorage.getItem("hr1");
    buttonEl.parent().children().eq(13).text(currenthr1);

    var currenthr2 = localStorage.getItem("hr2");
    buttonEl.parent().children().eq(16).text(currenthr2);

    var currenthr3 = localStorage.getItem("hr3");
    buttonEl.parent().children().eq(19).text(currenthr3);

    var currenthr4 = localStorage.getItem("hr4");
    buttonEl.parent().children().eq(22).text(currenthr4);

    var currenthr5 = localStorage.getItem("hr5");
    buttonEl.parent().children().eq(25).text(currenthr5);
  });

  $(function headerDate() {
    var currentDay = dayjs().format("M /DD /YYYY");
    HeaderEl.text(currentDay);
  });

  $(function timeColorChanger() {
    setInterval(function () {
      var currentHour = dayjs().format("H");
      // currentHour = 10
      var hour9 = $("#hour-9");
      var hour10 = $("#hour-10");
      var hour11 = $("#hour-11");
      var hour12 = $("#hour-12");
      var hour1 = $("#hour-1");
      var hour2 = $("#hour-2");
      var hour3 = $("#hour-3");
      var hour4 = $("#hour-4");
      var hour5 = $("#hour-5");

      if (currentHour > 9) {
        hour9.attr("class", "row time-block past");
      } else if (currentHour == 9) {
        hour9.attr("class", "row time-block present");
      } else if (currentHour < 9 && currentHour >= 0) {
        hour9.attr("class", "row time-block future");
      }

      if (currentHour > 10) {
        hour10.attr("class", "row time-block past");
      } else if (currentHour == 10) {
        hour10.attr("class", "row time-block present");
      } else if (currentHour < 10 && currentHour >= 0) {
        hour10.attr("class", "row time-block future");
      }

      if (currentHour > 11) {
        hour11.attr("class", "row time-block past");
      } else if (currentHour == 11) {
        hour11.attr("class", "row time-block present");
      } else if (currentHour < 11 && currentHour >= 0) {
        hour11.attr("class", "row time-block future");
      }

      if (currentHour > 12) {
        hour12.attr("class", "row time-block past");
      } else if (currentHour == 12) {
        hour12.attr("class", "row time-block present");
      } else if (currentHour < 12 && currentHour >= 0) {
        hour12.attr("class", "row time-block future");
      }

      if (currentHour > 13) {
        hour1.attr("class", "row time-block past");
      } else if (currentHour == 13) {
        hour1.attr("class", "row time-block present");
      } else if (currentHour < 13 && currentHour >= 0) {
        hour1.attr("class", "row time-block future");
      }

      if (currentHour > 14) {
        hour2.attr("class", "row time-block past");
      } else if (currentHour == 14) {
        hour2.attr("class", "row time-block present");
      } else if (currentHour < 14 && currentHour >= 0) {
        hour2.attr("class", "row time-block future");
      }

      if (currentHour > 15) {
        hour3.attr("class", "row time-block past");
      } else if (currentHour == 15) {
        hour3.attr("class", "row time-block present");
      } else if (currentHour < 15 && currentHour >= 0) {
        hour3.attr("class", "row time-block future");
      }

      if (currentHour > 16) {
        hour4.attr("class", "row time-block past");
      } else if (currentHour == 16) {
        hour4.attr("class", "row time-block present");
      } else if (currentHour < 16 && currentHour >= 0) {
        hour4.attr("class", "row time-block future");
      }

      if (currentHour > 17) {
        hour5.attr("class", "row time-block past");
      } else if (currentHour == 17) {
        hour5.attr("class", "row time-block present");
      } else if (currentHour < 17 && currentHour >= 0) {
        hour5.attr("class", "row time-block future");
      }

      if (currentHour == 18) {
        var hours = [
          hour9,
          hour10,
          hour11,
          hour12,
          hour1,
          hour2,
          hour3,
          hour4,
          hour5,
        ];
        var hr = [
          "hr9",
          "hr10",
          "hr11",
          "hr12",
          "hr1",
          "hr2",
          "hr3",
          "hr4",
          "hr5",
        ];
        for (const hour of hours) {
          hour.children().eq(1).text(" ");
        }

        for (const element of hr) localStorage.setItem(`${element}`, "");
      }
    }, 100);
  });
});

