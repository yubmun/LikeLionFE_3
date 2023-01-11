import React from "react";


function Result({keyword, isPending}) {

  const bigWork = new Array(10000).fill(0);

  return (
    <div>
      {
        isPending ? (
          <div>Loading...</div>
        ) : (
          bigWork.map(() => {
            return <div>{keyword} {keyword} {keyword}</div>
          })
        )
      }
    </div>
  )
}

export default Result