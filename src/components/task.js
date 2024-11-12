import React, {useEffect, useState} from 'react'
import {db} from '../services/firebase.config'
import { addDoc, collection, getDocs } from 'firebase/firestore'

const Task = () => {

  const [tasks, setTasks] = useState([])
  const [createTask, setCreateTask] = useState("")

  const collectionrRed = collection(db, 'tasks')

  useEffect (() => {
    const getTasks = async () => {
      await getDocs(collectionRef).then((task) => {
      let tasksData = task.docs.map((doc) => ({...doc.data(), id: 
      doc.id}))
      setTasks(tasksData)
      }).catch((err) => {
        clgsole.log(err);
      })
    }
    getTasks()
  }, [])


  //Add task handler
  const submittask = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collectionRef, {
        task: createTask,
        isChecked: false
      })
window.location.reload()
    }catch (err) {
      console.log(err)
    }
  }

const deleteTask = asyn() => {

try {
  window.confirm('Are you sure you want to delete this task?')
  console.log(id)

}catch (err) {
  consilde.log(err)
}

}


  return (
      <>
        <div className="container">
          <div className="row col-md-12">
            <div className="card card-white">
              <div className="card-body">

              {/* Button trigger modal */}
              <button type="button" className="btn btn-primary" 
              data-toggle="modal" data-target="#exampleModal">
                Add task
              </button>
                {tasks.map(({task, id}) =>
                <div className="todo-list" key={id}>
                  <div className="todo-item">
                    <hr />
                    <span>
                      <div className="checker">
                        <span>
                          <input type="checkbox" />
                        </span>
                      </div>
                      &nbsp;{task}
                    </span>
                    <span className="float-end mx-3">
                     <button type="button" className="btn btn-primary
                     ">Edit</button> 
                    </span>
                                    
                    <button 
                      type="button"  
                      className="btn btn-danger 
                      float-end "
                      onClick={() => deleteTask(id)}
                    >Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
)


        {/*Modal */}
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form onSubmit={submitTask} className="d-flex">
          <input 
          type ="text" 
          className="form-control" 
          placeholder="add a Task" 
          onChange={e => setCreatetask(e.target.value)}
          />
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Add Task</button>
      </div>
    </div>
  </div>
</div>
      </>
  )
}

export default task
 