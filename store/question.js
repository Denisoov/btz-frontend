import defaultsTypesQuestion from '@/helpers/defaultsTypesQuestion'
import { defaultStateQuestion } from '@/helpers/default-states'

const defaultActiveQuestion = {
  id: null,
  opinions: [],
  type_question_id: 0,
  answer: [],
} 

export const state = () => defaultStateQuestion()
  
export const mutations = {
  SET_LIST_QUESTIONS(state, questions) {
    state.questions = questions
  },
  SET_ACTIVE_QUESTION(state, question) {
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
    state.activeQuestion.answer = state.activeQuestion.opinions.map(
      (item) => item.id)
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
  },
  CHANGE_BODY_QUESTION(state, bodyQuestion) {
    state.activeQuestion = Object.assign(state.activeQuestion, bodyQuestion)
    
    state.questions.forEach(element => {
      if (element.id === state.activeQuestion.id) {
        element = Object.assign(element, state.activeQuestion)
      }
      return element
    });
  },
  RESET_STATE(state) {
    Object.assign(state, defaultStateQuestion())
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
  async changeActiveQuestion({ commit, state }, bodyQuestion) {
    try {
      const { id } = state.activeQuestion

      if (id) {
        const { data } = await this.$api.put(`question/update/${id}`, {...state.activeQuestion})

        await commit('CHANGE_BODY_QUESTION', data)
        await commit('SET_ACTIVE_QUESTION', bodyQuestion)
      }
      else commit('SET_ACTIVE_QUESTION', bodyQuestion)
    } catch (error) {
      
    }
  },

  async changeTypeQuestion({ commit, state }, typeQuestion) {
    try {
      const { id } = state.activeQuestion

      const bodyQuestion = defaultsTypesQuestion.find(
        (obj) => obj.type_question_id === typeQuestion)

      if (id) {
        const { data } = await this.$api.put(`question/update/${id}`, {...bodyQuestion})
        await commit('CHANGE_BODY_QUESTION', data)
      }
    } catch (error) {
      
    }
  },

  async autoSaveActiveQuestion({ commit, state }) {
    try {
      const activeQuestion = state.activeQuestion

      if (activeQuestion.id) {
        await this.$api.put(`question/update/${activeQuestion.id}`, {...activeQuestion})

        await commit('RESET_STATE')
      }
    } catch (error) {
      
    }
  },
}

export const getters = {
  questions: ({ questions }) => questions,
  activeQuestion: ({ activeQuestion }) => activeQuestion,
}
