import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

function MovieDetails() {

const location = useLocation()
  const movieApi = location.state?.movie;
  const [movie, setMovie] = useState(null);
  const navigate=useNavigate()

  useEffect(() => {
    if (!movieApi) return;

    fetch(`https://www.omdbapi.com/?i=${movieApi}&apikey=d150240d`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      });
  }, [movieApi]);

  if (!movieApi) {
    return (
      <div className='movie-page'>
        <div className='detail-card empty-detail'>
          <p>No movie selected.</p>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className='movie-page'>
        <div className='detail-card loading-detail'>
          <p>Loading movie details...</p>
        </div>
      </div>
    );
  }



  return (
    <div>
       <div className='movie-page bg-dark'>
        <div className='detail-card'>
        <div className='detail-grid d-flex flexDirectionColumn' style={{ display: 'grid',gridTemplateColumns: '320px 1fr, gap: 45px'}}>
          <div className='detail-poster'>
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster :  'https://m.media-amazon.com/images/M/MV5BYzYyN2FiZm…2YxXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg'}
              className='detail-poster ms-3 mt-3 mb-3'
              style={{ width: '360px', borderRadius: '5px', display: 'block', boxShadow:'0 15px 40px rgba(0, 0, 0, 0.5)'}}
              alt={movie.Title}
            />
          </div>

          <div className='detail-content text-light  ms-5 mt-3'>

            <h3 className='detail-title fw-bold text-danger'>{movie.Title}</h3>
            <div className='detail-meta d-flex'>
              <span>{movie.Year}</span>
              <br />
              <span className='ms-5'>{movie.Runtime}</span>
            </div>

            

            <div className='detail-info-grid mt-1 '>
              <p className='text-danger'><strong>IMDB Rating:</strong> {movie.imdbRating} ({movie.imdbVotes} votes)</p>
              <p><strong>Genre:</strong> {movie.Genre}</p>
              <p><strong>Director:</strong> {movie.Director}</p>
              {/* <p><strong>Writer:</strong> {movie.Writer}</p> */}
              <p><strong>Actors:</strong> {movie.Actors}</p>
              {/* <p><strong>Released:</strong> {movie.Released}</p> */}
              <p><strong>Language:</strong> {movie.Language}</p>
              {/* <p><strong>Country:</strong> {movie.Country}</p> */}
              {/* <p><strong>Box Office:</strong> {movie.BoxOffice}</p> */}
              <p><strong>Awards:</strong> {movie.Awards}</p>
              
              {/* <p><strong>Metascore:</strong> {movie.Metascore}</p> */}
              {/* <p><strong>IMDB ID:</strong> {movie.imdbID}</p> */}
            </div>

            <p className='detail-plot'><strong>Plot:</strong> {movie.Plot}</p>

            {movie.Ratings && movie.Ratings.length > 0 && (
              <div className='ratings-box'>
                <h5>Ratings</h5>
                <ul>
                  {movie.Ratings.map((r, index) => (
                    <li key={index}><strong>{r.Source}:</strong> {r.Value}</li>
                  ))}
                </ul>
              </div>
            )}
             <div className="back-button btn btn-dark" >
                <button onClick={() => navigate("/")} style={{ background: '#1c252e',border:' 1px solid #36414c',color: 'white',padding: '10px 18px', borderRadius: '8px'}}>
                  <i className="bi bi-arrow-left"></i>
                  {" "}
                  Back to Results
                </button>

              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MovieDetails