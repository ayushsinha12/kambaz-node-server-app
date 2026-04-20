export default [
    {
      _id: "Q101",
      title: "Rocket Propulsion Fundamentals",
      description: "Test your knowledge of rocket propulsion fundamentals.",
      course: "RS101",
      quizType: "GRADED_QUIZ",
      points: 30,
      assignmentGroup: "QUIZZES",
      shuffleAnswers: true,
      timeLimit: 20,
      multipleAttempts: false,
      howManyAttempts: 1,
      showCorrectAnswers: "immediately",
      accessCode: "",
      oneQuestionAtATime: true,
      webcamRequired: false,
      lockQuestionsAfterAnswering: false,
      dueDate: "2024-05-13",
      availableDate: "2024-05-06",
      untilDate: "2024-05-20",
      published: true,
      questions: [
        {
          _id: "QQ101",
          title: "Question 1",
          type: "MULTIPLE_CHOICE",
          points: 10,
          question: "What is the primary purpose of a rocket nozzle?",
          choices: [
            { _id: "QQ101C1", text: "To store fuel", isCorrect: false },
            { _id: "QQ101C2", text: "To convert thermal energy to kinetic energy", isCorrect: true },
            { _id: "QQ101C3", text: "To cool the engine", isCorrect: false },
            { _id: "QQ101C4", text: "To measure thrust", isCorrect: false }
          ]
        },
        {
          _id: "QQ102",
          title: "Question 2",
          type: "TRUE_FALSE",
          points: 10,
          question: "Rocket engines require oxygen from the atmosphere to combust fuel.",
          correctAnswer: false
        },
        {
          _id: "QQ103",
          title: "Question 3",
          type: "FILL_IN_BLANK",
          points: 10,
          question: "The force that propels a rocket forward is called ______.",
          possibleAnswers: ["thrust", "Thrust", "THRUST"]
        }
      ]
    },
    {
      _id: "Q102",
      title: "Combustion Theory Quiz",
      description: "A quiz covering combustion theory in rocket engines.",
      course: "RS101",
      quizType: "GRADED_QUIZ",
      points: 20,
      assignmentGroup: "QUIZZES",
      shuffleAnswers: false,
      timeLimit: 15,
      multipleAttempts: true,
      howManyAttempts: 2,
      showCorrectAnswers: "immediately",
      accessCode: "",
      oneQuestionAtATime: false,
      webcamRequired: false,
      lockQuestionsAfterAnswering: false,
      dueDate: "2024-06-01",
      availableDate: "2024-05-20",
      untilDate: "2024-06-05",
      published: false,
      questions: [
        {
          _id: "QQ201",
          title: "Question 1",
          type: "TRUE_FALSE",
          points: 10,
          question: "Combustion always requires a fuel and an oxidizer.",
          correctAnswer: true
        },
        {
          _id: "QQ202",
          title: "Question 2",
          type: "FILL_IN_BLANK",
          points: 10,
          question: "The specific impulse of a rocket engine is measured in ______.",
          possibleAnswers: ["seconds", "Seconds", "s"]
        }
      ]
    }
  ];