import defaultsTypesQuestion from '@/helpers/defaultsTypesQuestion'

const defaultState = {
  questions: [],
  activeQuestion: {
    id: null,
    opinions: []
  },
  listAt: [
    {
      id: 1,
      opinion: 'Вариант 1'
    },
    {
      id: 2,
      opinion: 'Вариант 2'
    },
  ],
}

export const state = () => defaultState
  
export const mutations = {
  SET_LIST_AT(state, listAt) {
    state.listAt = listAt
  },
  SET_LIST_QUESTIONS(state, questions) {
    state.questions = questions
  },
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
  REWRITE_OPEN_QUESTION_OPINION({ activeQuestion }, { index, text }) {
    activeQuestion.opinions[index].opinion = text
  },
  SET_ORDERING_QUESTION_OPINIONS(state, opinions) {
    state.activeQuestion.opinions = opinions
  },
  REWRITE_ORDERING_QUESTION_OPINION({ activeQuestion }, {index, opinion}) {
    activeQuestion.opinions[index].opinion = opinion

  },
  REVIEW_CLOSED_QUESTION_ANSWERS({ activeQuestion }, answers) {
    const result = []
    
    for (let i = 0; i < answers.length; i++) {
      result.push(answers[i].replace(/\s/g, ''))
    }

    activeQuestion.answer = result

  },
  ADD_NEW_QUESTION(state, question) {
    state.questions.push(question)
  },
  DELETE_QUESTION(state, idQuestion) {
    state.questions = state.questions.filter((question) => question.id !== idQuestion)
  }
}

export const actions = {
  async getAllQuestions({ commit }, idCategory) {
    try {
      const { data } = await this.$api.get(`question/show/${idCategory}`)

      commit('SET_LIST_QUESTIONS', data)
    } catch (error) {
      
    }
  },

  async createQuestion({ commit, dispatch, rootState }, typeQuestion) {
    try {
      const { id } = rootState.category.detailCategory
      const question = defaultsTypesQuestion.find((obj) => obj.type_question_id === typeQuestion)

      const { data } = await this.$api.post(`question/create/category/${id}`, question)

      console.log(data)
      commit('ADD_NEW_QUESTION', data)
      
    } catch (error) {
      console.log(error)
      
    }
  },
  
  async deleteCurrentQuestion({ commit }, idQuestion) {
    try {
      await this.$api.delete(`question/delete/${idQuestion}`)

      await commit('DELETE_QUESTION', idQuestion)
      
    } catch (error) {
      
    }
  }
}

export const getters = {
  questions: ({ questions }) => questions,
  activeQuestion: ({ activeQuestion }) => activeQuestion,
}
