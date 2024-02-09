import Home from "./pages/Home";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const Global = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  `;
  return (
    <>
      <Global>
        <Navbar />
        <Home />
      </Global>
    </>
  );
}

export default App;
