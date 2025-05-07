const MovieCard = ({title, img, bg, text}) => {
    const movieCardStyles = bg ? {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
    } : {
        backgroundColor: "black",
        
    }
    return ( 
        <div className="movie-card" style={movieCardStyles}>
            <img src={img} alt={title} className="movie-image"/>
            <p className="movie-text">{text}</p>
        </div>
     );
}
 
export default MovieCard;