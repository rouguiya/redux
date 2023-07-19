import React from 'react';
import { useSelector } from 'react-redux';

function Task() {
  const tasks = useSelector((state) => (state.todo))
  const undonedTasks = tasks.filter((t) => t.done === false)
  return (
    <div>
      <strong> Todo: {undonedTasks.length} </strong>
    </div>
  )
}

export default Task;