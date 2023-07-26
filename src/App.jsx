import { useState } from "react";

import { logInWithEmailAndPassword } from "./firebase";
import Login from "./components/login/Login";
import "./App.css";
import Moments from "./components/moments/Moments";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onFinish = async (values) => {
    const res = await logInWithEmailAndPassword(values.email, values.password);
    if (res) {
      setIsAuthenticated(true);
      console.log("Success");
    } else {
      console.log("Failed");
    }
  };

  return <>{isAuthenticated ? <Moments /> : <Login onFinish={onFinish} />}</>;
}

export default App;
