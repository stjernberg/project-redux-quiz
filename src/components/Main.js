import React from 'react'
import { useSelector } from 'react-redux'
import { Question } from './Question'

export const Main = () => {
    

    if (!question) {
        return <h1> Oh no!I could not find the current question! </h1>
    }

    return ( 
      <Question />

    )
}