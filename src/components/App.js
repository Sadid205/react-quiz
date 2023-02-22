import "../styles/App.css";
import Layout from "./Layout";
// import Quiz from "./pages/Quiz";
// import Signup from "./pages/Signup";
import Login from "./pages/LoginForm";
function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home/> */}
        {/* <Signup /> */}
        {/* <Quiz /> */}
        {/* <Result /> */}
        <Login />
      </Layout>
    </div>
  );
}

export default App;
