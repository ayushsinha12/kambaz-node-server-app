import QuizAttemptsDao from "./dao.js";

export default function QuizAttemptRoutes(app, db) {
  const dao = QuizAttemptsDao(db);

  app.get("/api/quizzes/:quizId/attempts/last", (req, res) => {
    const { quizId } = req.params;
    const currentUser = req.session?.["currentUser"];
    if (!currentUser) return res.sendStatus(401);
    const attempt = dao.findLastAttemptForQuizAndUser(quizId, currentUser._id);
    res.json(attempt || null);
  });

  app.get("/api/quizzes/:quizId/attempts", (req, res) => {
    const { quizId } = req.params;
    const currentUser = req.session?.["currentUser"];
    if (!currentUser) return res.sendStatus(401);
    const attempts = dao.findAttemptsForQuizAndUser(quizId, currentUser._id);
    res.json(attempts);
  });

  app.post("/api/quizzes/:quizId/attempts", (req, res) => {
    const { quizId } = req.params;
    const currentUser = req.session?.["currentUser"];
    if (!currentUser) return res.sendStatus(401);
    const attempt = { ...req.body, quiz: quizId, user: currentUser._id };
    res.json(dao.createAttempt(attempt));
  });
}