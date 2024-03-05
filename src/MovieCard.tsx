
//             {
//             "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
//             "Year": "2016",
//             "imdbID": "tt18689424",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
//         }

type MovieProps = {
    Title: string;
    Poster: string;
    Year: string;
    Type: string;
    imdbID: string;
}


const MovieCard = ({ movie }: {
    movie: MovieProps
}) => {
    return (
        <div
            className='flex flex-col items-center'

        >
            <h2
            >{movie.Title}</h2>
            <img
                onClick={() => {
                    window.open(`https://vidsrc.to/embed/movie/${movie.imdbID}`)
                }}
                src={movie.Poster} alt={movie.Title} />
        </div >
    );
}

export default MovieCard;