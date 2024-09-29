import AddTodo from "./components/AddTodo"
import EditTodo from "./components/EditTodo"
import EditTodo1 from "./components/EditTodo1"
function App() 
{
  return <center class='todo-container'>
    <AppName></AppName>
  <h1>todo list</h1>
  <div class="container text-center">
  <div class="row">
  <div class="col-6">
    <input type="text" placeholder="Enter TODO here"></input>
  </div>
    <div class="col-4">
      <input type="date"></input>
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success">ADD</button>
    </div>
  </div>




  <div class="row">
  <div class="col-6">
    GOTO COLLEGE
  </div>
    <div class="col-4">
      2/10/2002
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger">DELETE</button>
    </div>
  </div>





  <div class="row">
  <div class="col-6">
    BUY MILK
  </div>
    <div class="col-4">
      2/10/2002
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger">DELETE</button>
    </div>
  </div>
</div>
</center>
}
export default App