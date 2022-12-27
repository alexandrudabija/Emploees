import { BrowserRouter ,Route,Routes } from "react-router-dom";

import Index from "./Components/Index";
import Nav from "./Components/Nav";
import Employees from "./Components/Employees";
import Jobs from "./Components/Jobs";
import Footer from "./Components/Footer"
import Data from "./Components/Data";
import DataEmployees from "./Components/DataEmployees";

// location.reload(false);

// const pageAccessedByReload = (
//   (window.performance.navigation && window.performance.navigation.type === 1) ||
//     window.performance
//       .getEntriesByType('navigation')
//       .map((nav) => nav.type)
//       .includes('reload')
// );



function App() {
  return (
    <div className="App" >
    <DataEmployees>
<Data>
        <BrowserRouter>
     
<Nav/>
            <Routes>   

{/* {pageAccessedByReload ? (<Route  path="/" element={<Main/>} />) :""}   */}
            <Route  path="/" element={<Index/>} />
            <Route  path="/Employees" element={<Employees/>} />
            <Route  path="/Jobs" element={<Jobs/>} />

            </Routes>
        <Footer/>
      </BrowserRouter> 

</Data>
</DataEmployees>
    </div>
  );
}

export default App;
