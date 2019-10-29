let questions = [
  {
    question:
      "What does AD stand for in relation to Windows Operating Systems?",
    answers: [
      "Alternative Drive",
      "Active Directory",
      "Automated Database",
      "Arrested Development"
    ],
    correctAnswer: ["Active Directory"]
  },
  {
    question: "What five letter word is the motto of the IBM Computer company?",
    answers: ["Click", "Logic", "Think", "Sweet"],
    correctAnswer: ["Think"]
  },
  {
    question:
      "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
    answers: ["Java", "C++", "C#", "Vulcan"],
    correctAnswer: ["C#"]
  },
  {
    question:
      "Nvidia&#039;s headquarters are based in which Silicon Valley city?",
    answers: ["Palo Alto", "Cupertino", "Santa Clara", "The City by the Bay"],
    correctAnswer: ["Santa Clara"]
  },
  {
    question:
      "Which one of these is not an official development name for a Ubuntu release?",
    answers: ["Modest Mouse", "Trusty Tahr", "Utopic Unicorn", "Wily Werewolf"],
    correctAnswer: ["Modest Mouse"]
  },
  {
    question:
      "What is the name of the default theme that is installed with Windows XP?",
    answers: ["Neptune", "Bliss", "Luna", "Bonkers!"],
    correctAnswer: ["Luna"]
  },
  {
    question:
      "Which of the following is a personal computer made by the Japanese company Fujitsu?",
    answers: ["FM-7", "PC-9801", "Xmillennium", "Apple IIc"],
    correctAnswer: ["FM-7"]
  },
  {
    question: "What does the term MIME stand for, in regards to computing?",
    answers: [
      "Multipurpose Internet Mail Extensions",
      "Mail Internet Mail Exchange",
      "Mail Interleave Method Exchange",
      "Money In My Bananastand"
    ],
    correctAnswer: ["Multipurpose Internet Mail Extensions"]
  },
  {
    question: "What does RAID stand for?",
    answers: [
      "Rapid Access for Indexed Devices",
      "Redundant Array of Independent Disks",
      "Romeo Alpha Indigo Delta",
      "Rollin' Around In Dumptrucks"
    ],
    correctAnswer: ["Redundant Array of Independent Disks"]
  },
  {
    question: "How many bytes are in a single Kibibyte?",
    answers: ["1000", "1024", "1240", "So, So Many"],
    correctAnswer: ["1024"]
  }
];

$("#start").on("click", () => {
  game.start();
});

$(document).on("click", "#end", () => {
  //   console.log("done?");
  game.done();
});

let game = {
  correct: 0,
  incorrect: 0,
  counter: 10,
  countdown: () => {
    game.counter--;
    $("#counter").html(game.counter);
    if ((game.counter = 1)) {
      game.done();
    }
  },
  start: () => {
    timer = setInterval(game.countdown, 1000);
    $("#box").prepend(
      "<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>"
    );
    $("#start").remove();
    for (let i = 0; i < questions.length; i++) {
      $("#box").append("<h2>" + questions[i].question + "</h2>");
      for (let j = 0; j < questions[i].answers.length; j++) {
        $("#box").append(
          "<input type='radio' name='question-" +
            i +
            "' value='" +
            questions[i].answers[j] +
            "'>" +
            questions[i].answers[j]
        );
      }
    }
    $("#box").append('<button id="end">DONE</button>');
  },
  done: () => {
    $.each($("input[name='question-0']:checked"), () => {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), () => {
      if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), () => {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), () => {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), () => {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), () => {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), () => {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), () => {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), () => {
      if ($(this).val() == questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-9']:checked"), () => {
      if ($(this).val() == questions[9].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    this.result();
  },

  result: () => {
    clearInterval(timer);
    $("#box h2").remove();
    $("#box").html("<h2>All Done!</h2>");
    $("#box").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $("#box").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    $("#box").append(
      "<h3>Unanswered: " +
        (questions.length + (this.incorrect + this.correct)) +
        "</h3>"
    );
  }
};
