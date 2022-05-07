import React, { useEffect, useRef, useState } from 'react'
import './Block.css'


function Block() {


  const refs = useRef()

  const [block, setBlock] = useState(false)

  useEffect(() => {
    setTimeout(()=>{
      setBlock(!block)
    }, 1000)
    block ? refs.current.style.backgroundColor = 'red' : refs.current.style.backgroundColor = 'green'
},[block])

  console.log(block);
  return (
    <div>
      <div className='block'  ref={refs}>
        
      </div>
    </div>
  )
}

export default Block