import React from 'react'
import { useSelector } from 'react-redux'
import CompleteQuestions from './CompleteQuestions';
import EditQuestions from './EditQuestions';
import RemoveQuestions from './RemoveQuestions';

export default function QuestionList({newQuestion, setQuestion}) {
    const questions = useSelector(store => store.questions);
  return (
    <div>
        {questions.map(q=>(
            <div key={q.name}>{q.name}
            <RemoveQuestions id={q.id} setQuestion={setQuestion}/>
            <CompleteQuestions newQuestion={newQuestion}/>
            <EditQuestions id={q.id} name={q.name} question={q} setQuestion={setQuestion}/>
            </div>
        ))}
    </div>
  )
}
