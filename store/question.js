import defaultsTypesQuestion from '@/helpers/defaultsTypesQuestion'

const defaultActiveQuestion = {
  id: null,
  opinions: [],
  type_question_id: 0,
  answer: [],
} 

const defaultState = {
  questions: [],
  activeQuestion: {
    id: null,
    opinions: [],
    type_question_id: 0,
    answer: []
  },
}

export const state = () => defaultState
  
export const mutations = {
  SET_LIST_QUESTIONS(state, questions) {
    state.questions = questions
  },
  SET_ACTIVE_QUESTION(state, question) {
    console.log(' у нас что перезапись?')
    if (state.activeQuestion?.id !== question.id)
      state.activeQuestion = Object.assign(
        state.activeQuestion, 
        {...question}
      )
  },
  SET_QUESTION_NAME({ activeQuestion }, text) {
    activeQuestion.question = text
  },
  CHANGE_TYPE_QUESTION(state, typeQuestion) {
    const question = defaultsTypesQuestion.find(
      (obj) => obj.type_question_id === typeQuestion)

    Object.assign(state.activeQuestion, {...question, active: true })
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
    state.questions = state.questions.filter(
      (question) => question.id !== idQuestion)

    state.activeQuestion = defaultActiveQuestion
  },
  DELETE_OPINION(state, index) {
    state.activeQuestion.opinions.splice(index,1)
  },
  ADD_OPINION_TYPE_OPEN(state, newOpinion) {
    state.activeQuestion.opinions.push(newOpinion)
  },
  ADD_OPINION_TYPE_ORDERING(state, newOpinion) {
    state.activeQuestion.opinions.push(newOpinion)
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

  async createQuestion({ commit, rootState }, typeQuestion) {
    try {
      const { id } = rootState.category.detailCategory
      const question = defaultsTypesQuestion.find(
        (obj) => obj.type_question_id === typeQuestion)

      const { data } = await this.$api.post(`question/create/category/${id}`, question)

      commit('ADD_NEW_QUESTION', Object.assign({}, data))
      
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
  },
  async changeQuestion({ commit, state }, { typeCommit, data}) {
    try {
      const { id } = state.activeQuestion

      if (id) {
        await this.$api.put(`question/update/${id}`, {...state.activeQuestion})
        await commit(`${typeCommit}`, data)
      }
    } catch (error) {
      
    }
  }
}

export const getters = {
  questions: ({ questions }) => questions,
  activeQuestion: ({ activeQuestion }) => activeQuestion,
}
