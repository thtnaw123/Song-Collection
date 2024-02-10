import Home from "./pages/Home/Home";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statistics from "./pages/Statistics/Statistics";
import AddSong from "./pages/AddSongs/AddSong";
import SongList from "./pages/SongsList/SongList";
function App() {
  const Global = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  `;
  return (
    <>
      <Global>
        <Router>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="addsong" element={<AddSong />} />
              <Route path="songs" element={<SongList />} />
              <Route path="stats" element={<Statistics />} />
            </Route>
          </Routes>
        </Router>
      </Global>
    </>
  );
}

export default App;
