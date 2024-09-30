import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div class="bg-white dark:bg-slate-800 py-10">
    	<p class="text-slate-500 dark:text-slate-400">Tailwind supports Dark xcxcmode. </p>
      {/* <Home/> */}

      <Outlet/>
  </div>

  );
}

export default App;
