import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { AppProvider } from "./context/appContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Header></Header>
          <div className="container">
            <AnimatedRoutes />
          </div>
          <Footer></Footer>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
