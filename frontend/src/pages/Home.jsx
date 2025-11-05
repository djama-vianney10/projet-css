import About from "../components/About"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projet from "../components/Projet"
import Summary from "../components/Summary"

function Home() {
  return (
    <div className="py-5">
      <Navbar />
      <Hero/>
      <About />
      <Projet />
      <Summary />
    </div>
  )
}

export default Home
