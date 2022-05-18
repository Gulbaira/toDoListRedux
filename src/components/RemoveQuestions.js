import React from 'react'
import { removeQuestion } from '../store/actions';
import { useDispatch } from 'react-redux'

export default function RemoveQuestions({id, setQuestion}) {
    const dispatch =useDispatch();
    const handleRemoveQuestion = () => {
        dispatch (removeQuestion(id));
        setQuestion('');
    }

  return (
    <div>
        <button onClick={handleRemoveQuestion}>Remove question</button>
    </div>
  )
}
