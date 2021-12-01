import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import css from './app.module.css';

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <BrowserRouter>
      <div className={css.app}>
        <Header />
        <Main tasks={tasks} setTasks={setTasks}/>
        <Footer tasks={tasks}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
