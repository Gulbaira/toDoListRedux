import * as actions from './actionTypes';

const initialState ={
  questions: [],

}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.QUESTION_ADD:
      return {
        ...state,
        questions: [...state.questions, action.payload]
      };


    case actions.QUESTION_REMOVE:
      return {
          questions: state.questions.filter(q => action.payload.id !== q.id)
      };

    case actions.QUESTION_COMPLETE:
        return {
          ...state,
            questions: state.questions.filter(q => {
              if (action.payload.id !== q.id){
                action.payload.complete = !action.payload.complete
              }
              return action.payload
            })};
      
    default:
      return state;
  }
}