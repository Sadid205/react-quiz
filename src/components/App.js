import "../styles/App.css";
import Layout from "./Layout";
import Quiz from "./pages/Quiz";

// import Signup from "./pages/Signup";
// import LoginForm from "./pages/LoginForm";
function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home/> */}
        {/* <Signup /> */}
        <Quiz />
      </Layout>
    </div>
  );
}

export default App;
