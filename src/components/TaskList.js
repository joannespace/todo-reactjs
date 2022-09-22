import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, showIncompleteTask, handleStatus, removeTask, handleFilter}) {
  return (
    <>
        <ul className="task-list">
            {tasks.filter(task => showIncompleteTask ? task.status !== showIncompleteTask : task).map(task => (
                <TaskItem key={task.id} task={task} handleStatus={handleStatus} removeTask={removeTask} />
            ))}
        </ul>

        <div className="filter-wrapper">
            <label htmlFor="filter" className="filter-label">Show incompleted taks only</label>
            <input type="checkbox" id="filter" onChange={handleFilter} checked={showIncompleteTask}/>
        </div>
    </>
  )
}

export default TaskList
