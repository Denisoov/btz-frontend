export const defaultStateQuestion = () => {
  return {
    questions: [],
    activeQuestion: {
      question: '',
      id: null,
      opinions: [],
      type_question_id: 0,
      answer: [],
    },
  }
}
