import React from 'react'
import { addQuestion } from '../store/actions';
import { useDispatch } from 'react-redux'


export default function AddQuestions({newQuestion, setQuestion}) {
    const dispatch = useDispatch();
    const handleAddQuestion = () => {
        dispatch (addQuestion(newQuestion))
        setQuestion('')
    }

  return (
    <div>
        <button onClick={handleAddQuestion}>Add ToDo</button>
    </div>
  )
}
