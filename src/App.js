import DTracker from './dailytracker.js';
import Budget from './budgetting.js';
import Home from './Home.js';
import RMBot from './rmbot.js';
import GraphComponent from './Spending_Analysis.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/budget' element={<Budget />} />
      <Route path='/dtracker' element={<DTracker />} />
      <Route path='/bot' element={<RMBot />} />
      <Route path='/spend' element={<GraphComponent />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
