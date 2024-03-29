// Silly questions
let questions = [
  {
    question:
      "What does AD stand for in relation to Windows Operating Systems?",
    answerArray: [
      "Alternative Drive",
      "Active Directory",
      "Automated Database",
      "Arrested Development"
    ],
    correctAnswer: ["Active Directory"]
  },
  {
    question: "What five letter word is the motto of the IBM Computer company?",
    answerArray: ["Click", "Logic", "Think", "Sweet"],
    correctAnswer: ["Think"]
  },
  {
    question:
      "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
    answerArray: ["Java", "C++", "C#", "Vulcan"],
    correctAnswer: ["C#"]
  },
  {
    question:
      "Nvidia&#039;s headquarters are based in which Silicon Valley city?",
    answerArray: ["Palo Alto", "Cupertino", "Santa Clara", "Oaktown's 357"],
    correctAnswer: ["Santa Clara"]
  },
  {
    question:
      "Which one of these is not an official development name for a Ubuntu release?",
    answerArray: [
      "Modest Mouse",
      "Trusty Tahr",
      "Utopic Unicorn",
      "Wily Werewolf"
    ],
    correctAnswer: ["Modest Mouse"]
  },
  {
    question:
      "What is the name of the default theme that is installed with Windows XP?",
    answerArray: ["Neptune", "Bliss", "Luna", "Bonkerzzz!"],
    correctAnswer: ["Luna"]
  },
  {
    question:
      "Which of the following is a personal computer made by the Japanese company Fujitsu?",
    answerArray: ["FM-7", "PC-9801", "Xmillennium", "Apple IIc"],
    correctAnswer: ["FM-7"]
  },
  {
    question: "What does the term MIME stand for, in regards to computing?",
    answerArray: [
      "Multipurpose Internet Mail Extensions",
      "Mail Internet Mail Exchange",
      "Mail Interleave Method Exchange",
      "Money In My Bananastand"
    ],
    correctAnswer: ["Multipurpose Internet Mail Extensions"]
  },
  {
    question: "What data storage technology is abbreviated RAID?",
    answerArray: [
      "Rapid Access for Indexed Devices",
      "Redundant Array of Independent Disks",
      "Romeo Alpha Indigo Delta",
      "Rollin' Around In Detroit"
    ],
    correctAnswer: ["Redundant Array of Independent Disks"]
  },
  {
    question: "How many bytes are in a single Kibibyte?<br/>",
    answerArray: ["1000", "1024", "1240", "So, So Many"],
    correctAnswer: ["1024"]
  }
];

// Click events
$("#start").on("click", function() {
  game.start();
});

$(document).on("click", "#end", function() {
  //   console.log("done?");
  game.done();
});

// Results + Countdown timer
let game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter === 0) {
      // console.log("done?");
      game.done();
    }
  },
  // Start of game
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#box").prepend("<h2>Timer: <span id='counter'>120</span> Secs</h2>");
    $("#start").remove();
    for (let i = 0; i < questions.length; i++) {
      $("#box").append(
        "<h2 class='question'>" + questions[i].question + "</h2>"
      );
      for (let j = 0; j < questions[i].answerArray.length; j++) {
        $("#box").append(
          "<input type='radio' name='question-" +
            i +
            "' value='" +
            questions[i].answerArray[j] +
            "'>" +
            questions[i].answerArray[j] +
            "<br/>"
        );
      }
    }
    $("#box").append('<br/><button id="end">DONE</button>');
  },
  // Done function
  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() == questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() == questions[9].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    // Compilation of results
    this.result();
  },
  // Display of results
  result: function() {
    clearInterval(timer);
    $("#box h2").remove();
    $("#box").html("<h2 class='done'>Game Over!</h2>");
    $("#box").append(
      "<h3 class='done'>Correct Answers: " + this.correct + "</h3>"
    );
    $("#box").append(
      "<h3 class='done'>Incorrect Answers: " + this.incorrect + "</h3>"
    );
    $("#box").append(
      "<h3  class='done'>Unanswered: " +
        (questions.length - (this.incorrect + this.correct)) +
        "</h3>"
    );
    // Start over button
    // $("#box").append('<button id="startOver" class="done">Play Again</button>');
    // $("#startOver").on("click", function() {
    //   $(".done").remove();
    //   game.start();
    // });
  }
};
