import { useState } from 'react'

const Home = () => {
  const [title, settitle] = useState();

  return (
    <div className="mt-2">
      <input
      type="text" 
      className="bg-white border-2 border-black rounded-md px-2"
      value={title}
      onChange={(e) => settitle(e.target.value)}
      />
    </div>
  )
}

export default Home