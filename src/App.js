import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Components/AddToCart_Payment_Components/Chekout/Checkout";




//testing purpus
// import SingleProductPage from "./Pages/Product_to_Payment/SingleProductPage";

//

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
  <Checkout />
    </div>
  );
}

export default App;
