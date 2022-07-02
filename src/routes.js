import { Routes, Route } from "react-router-dom"
import {Section1} from "./components/Section1/index"
import {Section2} from "./components/Section2/index"
import {Section3} from "./components/Section3/index"
import {Section4} from "./components/Section4/index"
import {Section5} from "./components/Section5/index"
import { Section6 } from "./components/Section6/index"
import { Section7 } from "./components/Section7/index"
import { Section8 } from "./components/Section8/index"

export default function Router() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Section1/>} />
      <Route  path="/servicos" element={<Section2/>} />
      <Route  path="/masquefarmacia" element={<Section3/>} />
      <Route  path="/ofertas" element={<Section4/>} />
      <Route  path="/adicionarnossaslojas" element={<Section5/>} />
      <Route  path="/cadastro" element={<Section6/>} />
      <Route  path="/finalizarvenda" element={<Section7/>} />
      <Route  path="/resgatartroco" element={<Section8/>} />
    </Routes>
    </>
  )
}