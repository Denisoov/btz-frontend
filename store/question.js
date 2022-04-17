const defaultState = {
  questions: [
    {
      id: 0,
      id_category: 1,
      question: 'Сколько будет 2 +2',
      type_question_id: 1,
      answer: [3],
      opinions: [
        {
          id: 1,
          opinion: '1',
        },
        {
          id: 2,
          opinion: '2',
        },
        {
          id: 3,
          opinion: '3',
        },
        {
          id: 4,
          opinion: '4',
        },
      ],
    },
    {
      id: 1,
      id_category: 1,
      question: 'Я ___ и был',
      type_question_id: 2,
      answer: ['был'],
      opinions: null,
    },
  ],
  activeQuestion: {
    id: null
  },
}

export const state = () => defaultState

export const mutations = {
  SET_ACTIVE_QUESTION(state, question) {
    console.log(question)

    if (state.activeQuestion?.id !== question.id)
      state.activeQuestion = Object.assign({}, {...question, active: true})
  },
  SET_QUESTION_NAME({ activeQuestion }, newTitle) {
    activeQuestion.question = newTitle
  }
}

export const actions = {}

export const getters = {
  questions: ({ questions }) => questions,
  activeQuestionId: ({ activeQuestion }) => activeQuestion.id,
}
