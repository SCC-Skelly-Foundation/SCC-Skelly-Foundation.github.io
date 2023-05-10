import { useEffect } from "react"
import Heading from "./components/Heading"
import References from "./components/References"
import Aos from "aos"
import "aos/dist/aos.css"
import Introduction from "./components/Introduction"


const App = () => {
  useEffect(() => {
    Aos.init()
  })
  return (
    <div className="flex flex-col items-center min-h-screen">
      <References/>
      <Heading/>
      <Introduction/>
    </div>
  )
}

export default App