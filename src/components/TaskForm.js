const React = require('react')
const moment = require('moment')
const uuid = require('uuid') 

const TaskForm = React.createClass({

  submitTask(e){
      e.preventDefault()
      const { titleInput, startInput, endInput } = this.refs
      let moments = moment().format('ddd MMM YYYY')
      let newTask = titleInput.value,
          newStart= startInput.value,
          newEnd = endInput.value,
          currentDate = moments, 
          taskID = uuid.v4();
      titleInput.value = ''
      startInput.value = ''
      endInput.value = ''
      //Send to the addTask Funciton
      this.props.addTask(newTask, newStart, newEnd, currentDate, taskID)    
  },

  render(){

    return (
    <div className="task-form">
      <form onSubmit={this.submitTask} className="taskTable">
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Title </span>
          <input ref="titleInput" type="text" className="form-control" placeholder="A Title for Your Task" aria-describedby="basic-addon1" required/>
        </div>
        <br />
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Start</span>
          <input ref="startInput" type="time" className="form-control" placeholder="A Starting Time for Your Task" aria-describedby="basic-addon1" required/>
          <span className="input-group-addon" id="basic-addon1">End  </span>
          <input ref="endInput" type="time" className="form-control" placeholder="An Ending Time for Your Task" aria-describedby="basic-addon1" required/>
        </div>
        <br />
      <button className="btn btn-lg btn-success">Add To My Schedule</button>
      </form>
    </div>
    )
  }
})
module.exports = TaskForm;