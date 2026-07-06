import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Capabilities from './pages/Capabilities'
import Secteurs from './pages/Secteurs'
import Qualite from './pages/Qualite'
import Equipements from './pages/Equipements'
import Rse from './pages/Rse'
import Carrieres from './pages/Carrieres'
import Entreprise from './pages/Entreprise'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/secteurs" element={<Secteurs />} />
        <Route path="/qualite" element={<Qualite />} />
        <Route path="/equipements" element={<Equipements />} />
        <Route path="/rse" element={<Rse />} />
        <Route path="/carrieres" element={<Carrieres />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
