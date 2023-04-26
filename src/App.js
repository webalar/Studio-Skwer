import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";

function App() {

  useEffect(() => {
    document.title = "Studio Skwer";  
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
