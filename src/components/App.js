const React = require('react');
const Task = require('./Task');
const TaskForm = require('./TaskForm');
const TaskTable = require('./TaskTable');

const App = React.createClass({

  getInitialState(){
    return {
      tasks: []
    }
  },

  componentWillMount(){
    const serializedData = localStorage.savedState
    let savedState;
    try{
      savedState = JSON.parse(serializedData)
      this.setState(savedState)
    } catch(err) {
      console.log("I am the catch err in App.js")
    } 
  },

  // Read-Parse-Modify-Strigify-Write

  componentWillUpdate(nextProps, nextState){
    console.log('I am nextState in componentWillUpdate: ', nextState[0])
    const serializedData = JSON.stringify(nextState)
    console.log('I am the serializedData after stringify: ', serializedData)
    localStorage.savedState = serializedData
  },

  addTask(newTask, newStart, newEnd, currentDate, taskID){
    const { tasks } = this.state
    let taskToAdd = {
      task: newTask, 
      start: newStart,
      end: newEnd,
      date: currentDate,
      id: taskID
    }
    this.setState({
      tasks: [...tasks, taskToAdd]
    })
  },

  deleteTask(e){
    e.preventDefault()
    let getId = e.target.getAttribute('data-id')
    let stateNabber = this.state.tasks;
    stateNabber = stateNabber.filter((item) => 
      item.id !== getId)
    this.setState({
      tasks: stateNabber
    })
  },

  editTask(e){
    e.preventDefault()
    let getId = e.target.getAttribute('data-id')
    let stateNabber = this.state.tasks;
    stateNabber = stateNabber.filter((item) => 
      item.id === getId)
    console.log('I am stateNabber in edit: ', stateNabber[0])
    let littleObj = {
      tasksToEdit: {
        task: stateNabber.task, 
        start: stateNabber.start,
        end: stateNabber.end,
        date: stateNabber.date,
        id: stateNabber.id
      }
    }
  },

  render(){
    const { tasks } = this.state
    
    return (
      <div className="contianer">
        <div className="row">
          <h1>Get Your Schedule On</h1>
          <TaskForm 
            addTask={this.addTask}
            editTask={this.editTask}
          />
          <TaskTable 
            deleteTask={this.deleteTask} 
            editTask={this.editTask}
            tasks={tasks} 
          />
        </div>
      </div>
    )
  }
})

module.exports = App;


