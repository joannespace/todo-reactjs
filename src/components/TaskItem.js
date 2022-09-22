import React from 'react'

function TaskItem({task, handleStatus, removeTask}) {
  return (
    <li key={task.id} className={task.status ? "done" : ""}>
        <span className="label">{task.title}</span>
        <div className="actions">
            <input type="checkbox" className="btn-action btn-action-done" onChange={(event) => handleStatus(task.id, event.target.checked)} checked={task.status} />
            <button className="btn-action btn-action-delete" onClick={(event) => removeTask(task.id)}>✖</button>
        </div>
    </li>
  )
}

export default TaskItem
