import { useState } from "react";

import { logInWithEmailAndPassword } from "./firebase";
import Login from "./components/login/Login";
import "./App.css";
import StoryWall from "./components/story-wall/StoryWall";

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

  return <>{isAuthenticated ? <StoryWall /> : <Login onFinish={onFinish} />}</>;
}

export default App;
