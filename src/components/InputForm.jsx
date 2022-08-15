import React from 'react'
import { useState } from 'react';

export const InputForm = ({taskList,setTaskList}) => {

    const [inputText,setInputText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setTaskList([
            ...taskList,
            {
                id: taskList.length,
                text:inputText,
                completed:false,
            }
        ]);
        console.log(taskList)
        setInputText("")
    };
    
    const handleChange = (e) => {
        setInputText(e.target.value);
    };

  return (
    <div className='inputForm'>
        <form onSubmit={ handleSubmit }>
            <input type="text" onChange={ handleChange }  value={inputText} />
            <button>Add</button>
        </form>
    </div>
  )
}
