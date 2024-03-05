
import { useEffect, useState } from 'react'
import './App.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
// import { Box, Grid } from '@radix-ui/themes';

import MovieCard from './MovieCard'

// 
const API_URL = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_KEY}`;




export default function App() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')


    const searchMovies = async (title: string) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search)


    }

    useEffect(() => {

        // searchMovies('batman')
    })

    return (
        <Theme
            appearance='dark'
            className='grid place-items-center h-screen  '
        >

            <div>
                <h1 className='text-4xl text-center text-blue-500' >
                    Movie Search
                </h1>
                <div className='flex justify-center' >
                    <input type="text" placeholder="Search for a movie" className='p-4'
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                    />
                    <button
                        onClick={() => {

                            searchMovies(searchTerm)
                        }}
                        className='p-4 bg-blue-500 text-white'
                    >Search</button>
                </div>
            </div>

            {/* <Grid columns="3" gap="3" width="auto">
                <Box height="9">
                    <DecorativeBox />
                </Box>
                <Box height="9">
                    <DecorativeBox />
                </Box>
                <Box height="9">
                    <DecorativeBox />
                </Box>
                <Box height="9">
                    <DecorativeBox />
                </Box>
                <Box height="9">
                    <DecorativeBox />
                </Box>
                <Box height="9">
                    <DecorativeBox />
                </Box>
            </Grid> */}



            <div id='movies' className='grid grid-cols-4 gap-4'>
                {movies.map((movie, i) => <MovieCard key={i} movie={movie} />)}
            </div>
        </Theme >
    )
}

