import React from 'react'
import { useState } from 'react'

export default function EditQuestions({ id, name, question, setQuestion}) {
    const [edit, setEditQuesion] = useState(false);
    const [value, setValue] =useState('');
    const handleEditQuestion= ()=>{
        setEditQuesion(id)
        setValue(name)
    }
    const handleSaveQuestion =() => {
        let newQuestion = [...question].map(item=> {
            if (item.id=== id){
                item.name = value
            }
            return item;
        })
        
    }
  return (
    <div>
        <button onClick={handleEditQuestion}>Edit question</button>
    </div>
  )
}
