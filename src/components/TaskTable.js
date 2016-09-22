const React = require('react')

const TaskTable = props => {

  const { tasks, deleteTask, editTask } = props;

  return (
    <div className="tasksContainer">
      {tasks.map((task, i) => (
        <div className="singleTask" key={task.id}>
          <span className="taskTitle">TASK TIITLE: {task.task}</span>
          <span className="taskStart">START TIME: {task.start}</span>
          <span className="taskEnd">END TIME: {task.end}</span>
          <span className="taskDate">DATE: {task.date}</span>
          <button onClick={editTask} className="btn btn-sm btn-primary" data-id={task.id}>Edit</button>
          <button onClick={deleteTask} className="btn btn-sm btn-danger" data-id={task.id}>delete</button>
        </div>
      ))}
    </div>
  )
}

module.exports = TaskTable;