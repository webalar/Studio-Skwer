import { useEffect } from "react";
import Home from "./routes/home/home";

function App() {

  useEffect(() => {
    document.title = "Studio Skwer";  
  }, []);

  return (
    <Home />
  );
}

export default App;
