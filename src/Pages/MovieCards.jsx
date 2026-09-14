import React from 'react'
import { useNavigate } from 'react-router-dom'

function MovieCards({movies=[]}) {
    const navigate= useNavigate()


    const movieInfo=(movieId)=>{
        navigate('/movieDetails',{state:{movie:movieId}})
    }


  return (
    <div>
         {movies.length === 0 ? (
                <div className='empty-state mt-3 text-danger fs-5 text-center'>
                    <p>Search for a movie to see results.</p>
                </div>
            ) : (
                <div className='results-grid' style={{ marginLeft:'8px',marginRight:'8px',display: 'grid', gridTemplateColumns:'repeat(5, minmax(0, 1fr))', gap: '20px'}}>
                    {movies.map((m) => (
                        <button
                            style={{ padding:'0', border: '1px solid #242c35', borderRadius:'12px',overflow: 'hidden', background:' #11161c',color: 'white', textAlign: 'left'}}
                            key={m.imdbID}
                            type='button'
                            className='movie-card'
                            onClick={() => movieInfo(m.imdbID)}
                        >
                            <img
                                className='movie-poster' 
                                style={{width:'100%',height:'360px',objectFit:'cover',display:'block'}}
                                src={m.Poster !== 'N/A'? m.Poster: 'https://via.placeholder.com/300x450?text=No+Poster'}
                                alt={m.Title}
                            />
                            <div className='movie-info' style={{padding:'15px'}}>
                                <p className='movie-title'>{m.Title}</p>
                                <p className='movie-year'>({m.Year})</p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
    

    </div>
  )
}


export default MovieCards