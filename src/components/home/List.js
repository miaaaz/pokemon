import React from 'react'
import Card from "./Card";

const List = () => {
  return (
      <div className={"container"}>
        <div className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-4"}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

      </div>

  )
}

export default List