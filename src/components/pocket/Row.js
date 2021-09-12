import React  from 'react'


const Row = ({id, name, quantity, photo, handleFree}) => {

  return (
      <tr className={"shadow"}>
        <th scope="col" className={"row-left"}>
          <img src={photo} alt={""}/>
        </th>

        <th scope="col">{name}</th>

        <th scope="col">
          {quantity}

        </th>

        <th scope="col" className={"row-right"}>
          <button
              onClick={() => handleFree(id)}
              className={"btn free-button"}>
            Free them all
          </button>
        </th>
      </tr>

  )
}

export default Row