import React, { useState,useEffect } from 'react'
import Header from '../Components/Header'
import MovieCards from './MovieCards'



function Search() {
    const [search,setSearch]=useState("")
    const [movie,setMovie]=useState([])

     useEffect(() => {
        window.scrollTo(0, 0)
       }, [])

    const checkMovie = (value) => {
        if (!value.trim()) {
            alert("Enter a valid Movie")
            return
        }

    fetch(`https://www.omdbapi.com/?s=${value}&apikey=d150240d`)
    .then((response)=> response.json())
    .then(movie=>{
      if (movie.Search) { 
         setMovie(movie.Search)
        console.log(movie.Search);
        document.getElementById ('MovieCards')?.scrollIntoView({
          behavior:'smooth',
          block:'start'
        })
      }
      else{
        setMovie([])
        alert("Movie not found. Try searching for another movie!")
      }
    })
    .catch(()=>{
      setMovie([])
      alert("Somthing Went Wrong! Please Try Again.")
    })

  }


  return (
    <div>
        <div className='main' style={{backgroundImage:'linear-gradient(rgba(0,0,0,0.8),rgba(40, 38, 38, 0.5)),url("bg.webp")' ,height:'89vh',backgroundSize:'cover'}}>
            <div className='text-center fw-bold py-5' >
             <h1 className="hero-title" style={{fontWeight:'700',fontSize:'80px',color:'white',lineHeight:'1.05'}} >
                Discover Your
                <br />
                <span className='text-danger'>Favorite Movies</span>
              </h1>

               <p className="text-light mt-4" style={{fontSize:'22px'}}>
                Search for any movie and explore details, ratings and more.
              </p>
            </div>

             <div className='d-flex align-items-center justify-content-center'>
                <input type="text" placeholder='Search for a Movie' className='form-control' style={{width:'280px'}} value={search} onChange={(e)=> setSearch(e.target.value)}/>
                <button className='btn btn-danger ms-4' onClick={()=>checkMovie(search)}>SEARCH</button>
            </div>
            
        </div>


        <div id="MovieCards"className="movies-section "style={{backgroundColor:'black'}}>

          <div className="movies-header">
          <h2 style={{color:'white',fontSize:'28px',fontWeight:'700'}}>
            Here the Movies Matching To Your Search...
          </h2>
          {movie.length > 0 && (
            <span className="movies-count">
              {movie.length} results found
            </span>
          )}

         </div>

         <MovieCards movies={movie} />

    </div>
    </div>
  )
}

export default Search