import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    
    <BrowserRouter>
      <Header></Header>
    </BrowserRouter>
  );
};

export default App;
