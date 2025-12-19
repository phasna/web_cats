import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CatsProvider } from "./context/CatsContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CatsList from "./pages/CatsList";
import CatDetail from "./pages/CatDetail";
import AdoptionRequest from "./pages/AdoptionRequest";
import Donations from "./pages/Donations";
import VirtualVisit from "./pages/VirtualVisit";
import RegisterCat from "./pages/RegisterCat";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <CatsProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chats" element={<CatsList />} />
              <Route path="/chat/:id" element={<CatDetail />} />
              <Route path="/adoption" element={<AdoptionRequest />} />
              <Route path="/dons" element={<Donations />} />
              <Route path="/visite-virtuelle" element={<VirtualVisit />} />
              <Route path="/enregistrer-chat" element={<RegisterCat />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CatsProvider>
  );
}

export default App;
