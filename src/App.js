import "./App.css";
import AllRoutes from "./Routes/AllRoutes";

import BackToTop from "./Components/BackToTop/BackToTop";

import Footer from "./Components/Footer/Footer";
import Checkout from "./Components/AddToCart_Payment_Components/Chekout/Checkout";





//testing purpus
// import SingleProductPage from "./Pages/Product_to_Payment/SingleProductPage";

//

function App() {
  return (
    <div className="App">
      
      <AllRoutes />

      <BackToTop/>
      
    {/* <SingleProductPage/> */}

      <Footer />
  <Checkout />
    </div>
  );
}

export default App;
