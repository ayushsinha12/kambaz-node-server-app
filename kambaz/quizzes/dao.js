import { v4 as uuidv4 } from "uuid";

export default function QuizzesDao(db) {
  function findQuizzesForCourse(courseId) {
    return db.quizzes.filter((q) => q.course === courseId);
  }

  function findQuizById(quizId) {
    return db.quizzes.find((q) => q._id === quizId);
  }

  function createQuiz(quiz) {
    const newQuiz = {
      title: "New Quiz",
      description: "",
      quizType: "GRADED_QUIZ",
      points: 0,
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
      dueDate: "",
      availableDate: "",
      untilDate: "",
      published: false,
      questions: [],
      ...quiz,
      _id: uuidv4(),
    };
    db.quizzes = [...db.quizzes, newQuiz];
    return newQuiz;
  }

  function updateQuiz(quizId, quizUpdates) {
    const quiz = db.quizzes.find((q) => q._id === quizId);
    if (!quiz) return null;
    Object.assign(quiz, quizUpdates);
    return quiz;
  }

  function deleteQuiz(quizId) {
    db.quizzes = db.quizzes.filter((q) => q._id !== quizId);
  }

  return {
    findQuizzesForCourse,
    findQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz,
  };
}