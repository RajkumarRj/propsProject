import logo from './logo.svg';
import './App.css';
import Main from './component/main.js'
import Movie from './component/movie.js'
import jsonData from './component/moviedetails.json'


function App() {
  return (
    <div className="App">
      <Main/>
      {jsonData.map(movie => (
        <Movie
          key={movie.id}
          title={movie.title}
          year={movie.year}
          actor={movie.actor}
          runTime={movie.runTime}
          genre={movie.genre}
          description={movie.description}
          imageBanner={movie.imageBanner}
          imageAside={movie.imageAside}
          rating={movie.rating}
        />
      ))}
      

    </div>
  );
}

export default App;
