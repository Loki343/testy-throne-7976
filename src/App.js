import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./Components/Footer/Footer";


//testing purpus
// import SingleProductPage from "./Pages/Product_to_Payment/SingleProductPage";
//

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    {/* <SingleProductPage/> */}
    </div>
  );
}

export default App;
