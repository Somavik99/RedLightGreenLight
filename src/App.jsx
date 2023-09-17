
import RLightGLight from "./Components/Light/RlightGLight";
import Registration from "./Components/Registration/Registration";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" exact element={<Registration />} />
          <Route path="/Light" exact element={<RLightGLight/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
