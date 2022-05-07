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
          isAnswer: true,
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
      question: 'Neque "porro quisquam est" qui dolorem ipsum',
      type_question_id: 2,
      answer: ['был'],
      opinions: null,
    },
    {
      id: 2,
      id_category: 2,
      question: 'Расположите элементы в порядке убывания',
      type_question_id: 2,
      answer: ['был'],
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
      id: 3,
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
    if (state.activeQuestion?.id !== question.id)
      state.activeQuestion = Object.assign({}, {...question, active: true})
  },
  SET_QUESTION_NAME({ activeQuestion }, text) {
    activeQuestion.question = text
  },
  SET_QUESTION_TYPE({ activeQuestion }, type) {
    activeQuestion.type_question_id = type
  },
  REWRITE_OPEN_QUESTION_OPINION({ activeQuestion }, opinion) {
    activeQuestion.opinions[opinion.index].opinion = opinion.text
  },
  REVIEW_CLOSED_QUESTION_ANSWERS({ activeQuestion }, answers) {
    const result = []
    
    for (let i = 0; i < answers.length; i++) {
      result.push(answers[i].replace(/\s/g, ''))
    }

    activeQuestion.answer = result

  },
}

export const actions = {
  async getAllQuestions({ commit }, idCategory) {
    try {
      const { data } = await this.$api.get(`question/show/${idCategory}`)
      
      console.log('questions', data)
    } catch (error) {
      
    }
  }
}

export const getters = {
  questions: ({ questions }) => questions,
  activeQuestion: ({ activeQuestion }) => activeQuestion,
}
