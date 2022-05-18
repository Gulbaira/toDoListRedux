import React from 'react'
import { completeQuestion } from '../store/actions';
import { useDispatch } from 'react-redux'


export default function CompleteQuestions(newQuestion, setQuestion) {
    const dispatch = useDispatch();
    const handleStatusQuestion = () => {
        dispatch (completeQuestion(newQuestion))
        setQuestion('')
    }

  return (
    <div>
        <button onClick={() => handleStatusQuestion}>
        com
        </button>
    </div>
  )
}
