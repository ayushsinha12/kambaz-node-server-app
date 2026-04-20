import { v4 as uuidv4 } from "uuid";

export default function QuizAttemptsDao(db) {
  function findAttemptsForQuizAndUser(quizId, userId) {
    return db.quizAttempts.filter(
      (a) => a.quiz === quizId && a.user === userId
    );
  }

  function findLastAttemptForQuizAndUser(quizId, userId) {
    const attempts = findAttemptsForQuizAndUser(quizId, userId);
    if (attempts.length === 0) return null;
    return attempts.sort((a, b) => b.attemptNumber - a.attemptNumber)[0];
  }

  function createAttempt(attempt) {
    const existing = findAttemptsForQuizAndUser(attempt.quiz, attempt.user);
    const newAttempt = {
      ...attempt,
      _id: uuidv4(),
      attemptNumber: existing.length + 1,
      submittedAt: new Date().toISOString(),
    };
    db.quizAttempts = [...db.quizAttempts, newAttempt];
    return newAttempt;
  }

  return {
    findAttemptsForQuizAndUser,
    findLastAttemptForQuizAndUser,
    createAttempt,
  };
}