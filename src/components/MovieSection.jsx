import BateVerde from "./BateBerde"
import Grid from "./Grid"
import MovieCard from "./MovieCard"
import WinLose from "./WinLose"

const MovieSection = () => {

    const movies = [
        {
            title:"Dream Productions",  img: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/144b6fec-60ea-4f47-9971-b8a2ee389ab9/dp_title_flat.png?format=750w", bg: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/5f00e8d5-2682-49e2-a98e-fbafc6095c29/bg.jpg?format=2500w", text:"NOW STREAMING"
        },
        {
            title:"Hoppers",  img: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/5c52424c-1feb-4755-99a0-a7236fd1b47e/hop2.jpg?format=750w", bg: "", text:"MARCH 6, 2026"
        },
        {
            title:"Toy Story 5",  img: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/32a4a56b-3113-4b4a-ba36-2cc8ba032a2e/logo.png?format=750w", bg: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/7a7b44e5-0525-47aa-8330-f45fe9661355/bg.jpg?format=2500w", text:"JUNE 19, 2026"
        }
    ]

    return(
        <>
            <section className="movieSection">
            

                <WinLose />
                <Grid />
                <BateVerde />
                

                
                <div className="movie-gallery">
                    {movies.map((movie, i)=>{
                        return ( 
                            <MovieCard key={i}  {...movie} />
                        )
                    })}
                </div>
            </section>
        </>    )
}

export default MovieSection;
