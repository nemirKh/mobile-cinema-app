import React from 'react'
import  '../StyleSheets/Demo.css'
import ManagerMovie from './ManagerMovie'


export default function ManagerMovies(props) {
    function getIdFromChild(id) {
        props.sendIdToHome(id);
    }
    let list = props.movies.map(movie =><div key={movie.MovieId}> <ManagerMovie item={movie} sendId2MngMovies={getIdFromChild}/></div>)
    return (
        <div className="lf demo4">
            {list}
        </div>
    )
}