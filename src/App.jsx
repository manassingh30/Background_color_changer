import { useState } from "react"


function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-1 rounded-full">
      <button
      onClick={()=> setColor("red")}
      className="px-3 py-2 rounded-full"
      style={{backgroundColor:"red"}}
      >Red</button>

<button
      onClick={()=> setColor("yellow")}
      className="px-3 py-2 rounded-full"
      style={{backgroundColor:"yellow"}}
      >Yellow</button>

<button
      onClick={()=> setColor("pink")}
      className="px-3 py-2 rounded-full"
      style={{backgroundColor:"pink"}}
      >Pink</button>

<button
      onClick={()=> setColor("white")}
      className="px-3 py-2 rounded-full"
      style={{backgroundColor:"White"}}
      >white</button>

<button
      onClick={()=> setColor("blue")}
      className="px-3 py-2 rounded-full"
      style={{backgroundColor:"blue"}}
      >blue</button>

<button
      onClick={()=> setColor("purple")}
      className="px-3 py-2 rounded-full"
      style={{backgroundColor:"purple"}}
      >purple</button>

<button
      onClick={() => setColor("green")} 
      className="px-3 py-2 rounded-full"
      style={{backgroundColor:"green"}}
      >green</button>
      </div>
      
      </div> 
      
    </div>
  )
}

export default App
