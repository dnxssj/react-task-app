import './App.css';
import logo from './img/logo.png';
import TaskList from './partials/TaskList';

function App() {
  return (
    <div className='Task-App'>
      <div className='contenedor-logo'>
        <img src={logo} className='DNX' />
      </div>
    
      <div className='lista-task-principal'>
        <h1>My tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
