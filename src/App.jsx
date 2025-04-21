import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import { ReferencesPage } from "./ReferencesPage";

export default function App() {
  return (
    <Router>
      <nav className="w-full bg-white shadow p-4 flex justify-between items-center">
        <Link to="/" className="text-green-700 font-bold text-xl">SiliCircle</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-green-700">Home</Link>
          <Link to="/references" className="text-gray-700 hover:text-green-700">References</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/references" element={<ReferencesPage />} />
      </Routes>
    </Router>
  );
}
