import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.route";
import Shop from "./components/shop/shop.component";
import Home from "./routes/home/home.route";
import Authentication from "./routes/authentication/authentication.route";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="authentication" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;