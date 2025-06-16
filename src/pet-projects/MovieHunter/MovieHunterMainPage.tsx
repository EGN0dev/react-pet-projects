import { useEffect, useState } from "react";


export interface Movie {
  id: number;
  title: string;
  poster_path: string | undefined;
  release_date: string;
  overview: string;
  vote_average: number;

}





export default function MovieHunterMainPage() {
  
  const [movies,setMovies ] = useState<Movie[]>([]);
  const [showCardOrCards, setShowCardOrCards] = useState<boolean>(true);
  const arrM:Movie[] = []

  const apiRequest = () => {
  fetch('https://api.themoviedb.org/3/search/movie?query=batman&api_key=9b707b026b354793d1d44d678b9215f9')
    .then((film)=>film.json())
  
    .then(film=>{
      
      console.log(film)
//arrM.push(films.id,films.poster_path,films.release_date,films.overview,films.vote_average)
      film.results.forEach((films:any)=>{ arrM.push({id:films.id,title:films.title,poster_path:films.poster_path,release_date:films.release_date,overview:films.overview,vote_average:films.vote_average})
        
       // console.log(arrM)
      })

      setMovies(arrM)

    })
   // DisplayFetchedFilms([{id:2,title:'4',poster_path:'4',release_date:'4',overview:'4',vote_average:2}])
    //setMovies([{id:2,title:'4',poster_path:'4',release_date:'4',overview:'4',vote_average:2}])
  }

  useEffect(() => {
    apiRequest()
   
  }, []);
 
  //setTimeout(apiRequest,2000)

   

   
    return (

  <div className="w-screen h-screen  flex items-center justify-center bg-zinc-800">
        <div className="border-black border-2 rounded-2xl bg-zinc-800 h-[700px] w-[600px]">
          <div className="w-full max-w-md mx-auto mt-4">
            <div className="flex justify-center font-[cursive] text-[20px] text-white bg-zinc-800 border border-white h-[40px] w-auto ml-[5px] mt-[10px] px-[10px] rounded-[30px]">
              MovieFinder
            </div>
                <div className="flex items-center bg-zinc-600 border border-zinc-600 rounded-3xl px-4 py-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="flex-grow bg-transparent outline-none text-white placeholder-gray-400 text-sm"
                    />
                </div>
          </div>


        <div>
             
              <DisplayFetchedFilms movies={movies} />
        </div>
          

                  
              

        </div>
  </div>
    );
  }

 

  const DisplayFetchedFilms = ({ movies }: { movies: Movie[] }, {showCardOrCards}: {showCardOrCards:boolean}) => {
   
    const moviesArray = movies.map((movie)=>{

      return <div key={movie.id}> 

        <img
            className="rounded-xl grid row-start-3"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Dune Poster"
          />
      {movie.title} {movie.release_date} {movie.vote_average} 
      
       </div>

    })

    if(!showCardOrCards){


        return (<div>
         <div> <button>
            Toggle View
          </button>
          </div>
          <div className="grid grid-cols-3 gap-2 p-[30px] ">
                  {moviesArray}
          </div>
          </div>
        )
      }
      else{
        return (
        <div className="grid grid-cols-3 gap-2 p-[30px] ">
        <p>ass</p>
        </div>
        )
      }




  }

 
