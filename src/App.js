import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ImageContainer from "./components/ImageContainer/ImageContainer";
// import { searchImages }  from "./api/api"

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Navbar query={query} setQuery={setQuery} />
      <ImageContainer query={query} />
    </div>
  );
}

export default App;
