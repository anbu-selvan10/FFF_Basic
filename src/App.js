import DTracker from './dailytracker.js';
import Budget from './budgetting.js';
import Home from './Home.js';
import RMBot from './rmbot.js';
import GraphComponent from './Spending_Analysis.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Linechart from './Linechart'
// import PieChart from './Piechart'






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
      {/* <Route path='/' element={<PieChart />} />
      <Route path='/' element={<Linechart />} /> */}

      
      
         
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;



