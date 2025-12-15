import { useState, useCallback, useMemo } from 'react';
import { questions, Question } from '@/data/surveyQuestions';

export interface SurveyResponse {
  questionId: string;
  value: string | string[];
}

export interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  questionId?: string;
}

export function useSurvey() {
  const [responses, setResponses] = useState<Record<string, string | string[]>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [started, setStarted] = useState(false);

  const selectedIndustry = responses['industry'] as string | undefined;

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (!q.industryFilter) return true;
      if (!selectedIndustry) return false;
      return q.industryFilter.includes(selectedIndustry);
    });
  }, [selectedIndustry]);

  const currentQuestion = useMemo(() => {
    if (currentQuestionIndex < 0) return null;
    return filteredQuestions[currentQuestionIndex] || null;
  }, [currentQuestionIndex, filteredQuestions]);

  const totalQuestions = filteredQuestions.length;
  const currentSection = currentQuestion?.section || 1;

  const progress = useMemo(() => {
    if (currentQuestionIndex < 0) return 0;
    return Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);
  }, [currentQuestionIndex, totalQuestions]);

  const addBotMessage = useCallback((content: string, questionId?: string) => {
    const id = `bot-${Date.now()}-${Math.random()}`;
    setMessages((prev) => [...prev, { id, type: 'bot', content, questionId }]);
  }, []);

  const addUserMessage = useCallback((content: string) => {
    const id = `user-${Date.now()}-${Math.random()}`;
    setMessages((prev) => [...prev, { id, type: 'user', content }]);
  }, []);

  const showTypingThenMessage = useCallback(
    async (content: string, questionId?: string, delay = 800) => {
      setIsTyping(true);
      await new Promise((resolve) => setTimeout(resolve, delay));
      setIsTyping(false);
      addBotMessage(content, questionId);
    },
    [addBotMessage]
  );

  const startSurvey = useCallback(async () => {
    setStarted(true);
    await showTypingThenMessage(
      "Great! Let's get started with a few quick questions.",
      undefined,
      600
    );
    setCurrentQuestionIndex(0);
    const firstQuestion = filteredQuestions[0];
    if (firstQuestion) {
      await showTypingThenMessage(firstQuestion.text, firstQuestion.id);
    }
  }, [showTypingThenMessage, filteredQuestions]);

  const submitAnswer = useCallback(
    async (value: string | string[], displayValue?: string) => {
      if (!currentQuestion) return;

      setResponses((prev) => ({ ...prev, [currentQuestion.id]: value }));
      addUserMessage(displayValue || (Array.isArray(value) ? value.join(', ') : value));

      const nextIndex = currentQuestionIndex + 1;

      // Special handling for industry selection
      if (currentQuestion.id === 'industry') {
        await showTypingThenMessage(
          `👍 Got it — ${displayValue}. I'll tailor the next questions for your industry.`,
          undefined,
          700
        );
      }

      // Check if we need to skip to next applicable question
      let actualNextIndex = nextIndex;
      while (actualNextIndex < questions.length) {
        const nextQ = questions[actualNextIndex];
        if (!nextQ.industryFilter) break;
        const industryToCheck = currentQuestion.id === 'industry' ? value : selectedIndustry;
        if (industryToCheck && nextQ.industryFilter.includes(industryToCheck as string)) break;
        actualNextIndex++;
      }

      if (actualNextIndex >= questions.length) {
        await showTypingThenMessage(
          "✅ All done — thank you! Your feedback helps us improve DBSync for teams like yours.",
          undefined,
          800
        );
        setIsComplete(true);
      } else {
        setCurrentQuestionIndex(actualNextIndex);
        const nextQuestion = questions[actualNextIndex];
        await showTypingThenMessage(nextQuestion.text, nextQuestion.id);
      }
    },
    [currentQuestion, currentQuestionIndex, addUserMessage, showTypingThenMessage, selectedIndustry]
  );

  return {
    started,
    messages,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    currentSection,
    isTyping,
    isComplete,
    responses,
    startSurvey,
    submitAnswer,
  };
}
