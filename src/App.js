import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import { Provider } from "react-redux";
import store from "./Store/store";
function App() {
  return (
    <div>
      
      <Provider store={store}>
        <Header />
        
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
