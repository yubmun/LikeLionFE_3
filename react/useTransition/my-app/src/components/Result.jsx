import React from "react";


function Result({keyword}) {

  const bigWork = new Array(10000).fill(0);

  return (
    <div>
      {
        bigWork.map(()=> {
          return <div>{keyword} {keyword} {keyword}</div>
        })
      }
    </div>
  )
}

export default Result