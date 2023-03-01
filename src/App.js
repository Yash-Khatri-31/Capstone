import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./routes/home/home.route";
import Shop from "./routes/shop/shop.route";
import { Routes, Route } from "react-router-dom";
import Checkout from "./routes/checkout/checkout.route";
import { setCurrentUser } from "./store/user/user.action";
import Navigation from "./routes/navigation/navigation.route";
import Authentication from "./routes/authentication/authentication.route";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="authentication" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;