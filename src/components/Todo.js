import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [

      ],
      currTask: "",
    };
  }
  handleChange=(e)=>{
    console.log(e.target.value)
    this.setState({
      currTask:e.target.value
    })
  }
  handleSubmit=()=>{
    this.setState({
      tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length}],
      currTask:''
    })
  }
  handledelete=(id)=>{
    let narr=this.state.tasks.filter((taskobj)=>{
      return taskobj.id!==id
    })
    this.setState({
      tasks:[...narr]
    })
  }
  render() {
    return (
      <div style={{textAlign:"center",marginTop:"1.5rem",background:"linear-gradient(114.96deg,#823ddc 34.12%,rgb(12, 230, 158) 105.4%)"}}>
        <input style={{maxHeight:"1.5rem",borderRadius:"1.5rem",padding:"1rem",backgroundColor:"rgba(255,0,0,0.3)",marginTop:'10rem'}} type="text" value={this.state.currTask} onChange={this.handleChange}/>
        <button style={{backgroundColor:"rgb(238,130,238)",maxHeight:"2rem"}} onClick={this.handleSubmit}>submit</button>
        <ul>
          {
            this.state.tasks.map((taskobj)=>(
              <li key ={taskobj.id}>
                <p>{taskobj.task}</p>
                <button onClick={()=>this.handledelete(taskobj.id)}>Delete</button>
              </li>
            ))
          }
          </ul>
      </div>
    );
  }
}
