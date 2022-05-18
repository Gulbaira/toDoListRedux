import * as actions from './actionTypes'; // * -беривсе значения и импортируй
        
export const addQuestion = question => ({
  type: actions.QUESTION_ADD,
  payload: question
});
export const removeQuestion = id => ({
  type: actions.QUESTION_REMOVE,
  payload: { id }
})
export const completeQuestion = question => ({
  type: actions.QUESTION_COMPLETE,
  payload: question,
})