import React from 'react'

export const TodoList = ({taskList,setTaskList}) => {

    const handleComplte = (id) => {
        console.log("完了")
        setTaskList(taskList.map((task) => {
            if(task.id === id){
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task;
        }))
       
    }

    const handleDelete = (id) => {
        
        console.log("削除")
        setTaskList(taskList.filter((task) => task.id !== id));
    }

  return (
    <div className='todoList'>
        <div className="todos">
            {taskList.map((task,index) => (
                <div className={`todo ${ task.completed ? "completed":""}`} key={index}>
                    <div className="todoText">
                        <span>{ task.text }</span>
                    </div>
                    <div className='complete' onClick={ () => handleComplte(task.id) }>
                        <button>完了</button>
                    </div>
                    <div className='delete'>
                        <button onClick={ () => handleDelete(task.id) }>削除</button>
                    </div>
                </div>
            )) }
        
        </div>
    </div>
  )
}
