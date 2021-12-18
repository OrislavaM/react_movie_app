import "./Styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import WatchList from "./Pages/WatchList";
import Navbar from "./components/UI/Navbar/Navbar";
import MovieInfo from "./Pages/MovieInfo";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/watch-list" element={<WatchList />} />
                <Route path="/movie/:id" element={<MovieInfo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
