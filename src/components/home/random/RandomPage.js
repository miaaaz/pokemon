import React, {useState, useEffect} from 'react'
import RandomCard from "../random/RandomCard";
import "./RandomPage.css"

const RandomPage = () => {

  const [id, setId] = useState("");

  const generateId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(898);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  useEffect(() => {
    const id = generateId()
    setId(id)
  }, [])

  return (
      <div>
        {/*<Navbar/>*/}
        <div className={"container random-wrapper"}>

          {
            id
            &&
            <RandomCard
                currentId={id}
                generateId={generateId}
            />
          }


        </div>

      </div>


  )
}

export default RandomPage