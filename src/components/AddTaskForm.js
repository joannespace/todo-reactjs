import React from 'react'

function AddTaskForm({handleSubmit, addNewTask, newTask }) {
  return (
    <form action="#" className="form" onClick={handleSubmit}>
        <label htmlFor="newitem">Add to the todo list</label>
        <input type="text" id="newitem" onChange={addNewTask} value={newTask} />
        <button type="submit">ADD ITEM</button>
    </form>
  )
}

export default AddTaskForm
