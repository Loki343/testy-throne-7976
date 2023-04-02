import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import BackToTop from "./Components/BackToTop/BackToTop";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <BackToTop />
    </div>
  );
}

export default App;
