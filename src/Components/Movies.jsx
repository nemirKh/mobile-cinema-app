import React from 'react'
import Movie from './Movie'
import  '../StyleSheets/Demo.css'


export default function Movies(props) {
    let list = props.movies.map(movie =><div key={movie.MovieId}> <Movie item={movie}/></div>)
    return (
        <div className="lf demo4">
            {list}
        </div>
    )
}
