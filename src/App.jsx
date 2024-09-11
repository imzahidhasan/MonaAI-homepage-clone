
import Footer from "./components/Footer"
import Header from "./components/Header"
import HowToUse from "./components/HowToUse"
import Navbar from "./components/Navbar"
import YoutubeBanner1 from "./components/YoutubeBanner1"
import YoutubeBanner2 from "./components/YoutubeBanner2"
import bgImage from "./assets/bg.jpg"
import AIProductPage from "./components/AiSection"
function App() {
  return (
    <>
      <div style={{ backgroundImage: `url(${bgImage})` }} className=' font-inter  bg-no-repeat mx-auto bg-contain min-h-screen bg-[#121a2b] '>
        <Navbar />
        <Header />
        <AIProductPage />
        <HowToUse />
        <YoutubeBanner1 />
        <YoutubeBanner2 />
        <Footer />
      </div>
    </>
  )
}

export default App
