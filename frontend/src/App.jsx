import "./App.css";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RoomLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
