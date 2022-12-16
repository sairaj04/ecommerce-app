import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/Categories-pages/All";
import Furnitures from "./components/Categories-pages/Furnitures";
import Electronics from "./components/Categories-pages/Electronics";
import Lamps from "./components/Categories-pages/Lamps";
import Kitchen from "./components/Categories-pages/Kitchen";
import Chairs from "./components/Categories-pages/Chairs";
import SkinCare from "./components/Categories-pages/SkinCare";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="furnitures" element={<Furnitures />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="lamps" element={<Lamps />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="chairs" element={<Chairs />} />
          <Route path="skin-care" element={<SkinCare />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
