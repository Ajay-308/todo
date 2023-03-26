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
    //console.log(e.target.value)
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
      <div class="text" >
        
      <div  style={{textAlign:"center",height:"20rem",marginLeft:"1rem", marginTop:"1.5rem",width:"98vw",background:"linear-gradient(114.96deg,#823ddc 34.12%,rgb(12, 230, 158) 105.4%)"}}>
        <input id="send" style={{maxHeight:"1.5rem",padding:"1rem",border:".1rem solid blue",borderRadius:"1rem",marginTop:"5rem",width:"20rem"}} type="text" value={this.state.currTask} onChange={this.handleChange}/>
        <button style={{maxHeight:"2rem",margin:'10px'}} onClick={this.handleSubmit}>submit</button>
        <ul>
          {
            this.state.tasks.map((taskobj)=>(
              <li key ={taskobj.id}>
                <p>{taskobj.task}</p>
                <button style={{borderRadius:"5rem"}} onClick={()=>this.handledelete(taskobj.id)}>Delete</button>
              </li>
            ))
          }
          </ul>
      </div>
      </div>
    );
  }
}
