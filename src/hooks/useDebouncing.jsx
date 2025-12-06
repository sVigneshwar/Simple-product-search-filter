import React, {useEffect, useState} from 'react'

function useDebouncing(input, delay = 500) {

    const [incomingInput, setIncomingInput] = useState(input)

     useEffect(() => {
      var timer = setTimeout(() => setIncomingInput(input), delay)
      return () => {clearTimeout(timer)}
    },[input])

    return incomingInput
}

export default useDebouncing
