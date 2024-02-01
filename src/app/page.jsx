import Experiencia from "@/components/Experiencia"
import About from "@/components/About"
import Inicio from "@/components/Inicio"
import Pokeapi from "@/components/Pokeapi"




export default async function Home() {
  return (
    <main className="snap snap-y snap-mandatory overflow-scroll overflow-x-hidden w-screen h-screen">
      <Inicio/>
      <Experiencia/>
      <About/>
      <Pokeapi/>
    </main>
  )
}
