import { useMutation, useQuery } from "react-query";
import { apiRoutes } from "../routes";
import { Question } from "../types/quiz";
import { axiosInst } from "./axios";

interface QuizQuestionsResponse {
  questions: Question[];
}

interface QuizResult {
  correctCount: number;
  wrongCount: number;
}

export const useQuizQuestions = (exhibitId: string, enabled: boolean) => {
  return useQuery({
    queryKey: ["quiz-questions", exhibitId],
    queryFn: () =>
      axiosInst
        .get<QuizQuestionsResponse>(apiRoutes.QUIZ)
        .then((res) => res.data),
    enabled,
  });
};

export const useSubmitQuiz = (exhibitId: string) => {
  return useMutation({
    mutationKey: ["quiz-submit", exhibitId],
    mutationFn: (quizData: any) =>
      axiosInst
        .post<QuizResult>(apiRoutes.QUIZ_SUBMIT, {
          exhibitId,
          quiz: quizData,
        })
        .then((res) => res.data)
        .catch(() => ({ correctCount: 1, wrongCount: 4 })),
  });
};
