import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

function StubPage({ title }: { title: string }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-barlow font-bold text-[36px] text-slate-900 mb-4">{title}</h1>
        <p className="font-dmSans text-slate-500">Page en construction</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capabilities" element={<StubPage title="Nos Capacités" />} />
        <Route path="/secteurs" element={<StubPage title="Nos Secteurs" />} />
        <Route path="/qualite" element={<StubPage title="Qualité" />} />
        <Route path="/equipements" element={<StubPage title="Équipements" />} />
        <Route path="/rse" element={<StubPage title="RSE" />} />
        <Route path="/carrieres" element={<StubPage title="Carrières" />} />
        <Route path="/entreprise" element={<StubPage title="Entreprise" />} />
        <Route path="/contact" element={<StubPage title="Contact" />} />
      </Routes>
    </Layout>
  )
}
