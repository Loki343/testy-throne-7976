import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import BackToTop from "./Components/BackToTop/BackToTop";


//testing purpus
// import SingleProductPage from "./Pages/Product_to_Payment/SingleProductPage";
//

function App() {
  return (
    <div className="App">
      
      <AllRoutes />
      <BackToTop/>
      
    {/* <SingleProductPage/> */}
    </div>
  );
}

export default App;
