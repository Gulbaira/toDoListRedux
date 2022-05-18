import React from 'react';
import { useState } from 'react';
import AddQuestions from './AddQuestions';
import QuestionList from './QuestionList';
import {v4 as uuidv4} from 'uuid';


export default function Question() {
    const [question, setQuestion] = useState('');
    const handleQuestionChange = (e) => {
        setQuestion(e.target.value)
    }
    const newQuestion = {
        name: question,
        id: uuidv4(),
        complete: false,
    }
  return (
    <div>
        <input type='text' value={question} onChange= {handleQuestionChange}/>
        <AddQuestions question={question} setQuestion={setQuestion} newQuestion={newQuestion}/>
        <QuestionList question={question} setQuestion={setQuestion} newQuestion={newQuestion}/>
    </div>
  )
}
