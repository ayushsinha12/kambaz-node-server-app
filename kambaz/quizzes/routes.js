import QuizzesDao from "./dao.js";

export default function QuizRoutes(app, db) {
  const dao = QuizzesDao(db);

  app.get("/api/courses/:courseId/quizzes", (req, res) => {
    const { courseId } = req.params;
    const currentUser = req.session?.["currentUser"];
    const quizzes = dao.findQuizzesForCourse(courseId);
    if (currentUser && currentUser.role === "STUDENT") {
      return res.json(quizzes.filter((q) => q.published));
    }
    res.json(quizzes);
  });

  app.get("/api/quizzes/:quizId", (req, res) => {
    const { quizId } = req.params;
    res.json(dao.findQuizById(quizId));
  });

  app.post("/api/courses/:courseId/quizzes", (req, res) => {
    const { courseId } = req.params;
    const quiz = { ...req.body, course: courseId };
    res.json(dao.createQuiz(quiz));
  });

  app.put("/api/quizzes/:quizId", (req, res) => {
    const { quizId } = req.params;
    const updated = dao.updateQuiz(quizId, req.body);
    res.json(updated);
  });

  app.delete("/api/quizzes/:quizId", (req, res) => {
    const { quizId } = req.params;
    dao.deleteQuiz(quizId);
    res.sendStatus(200);
  });
}