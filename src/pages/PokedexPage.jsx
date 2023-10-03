import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import Pagination from "../components/PokedexPage/Pagination"
import './styles/PokedexPage.css'
import './styles/types.css'

const PokedexPage = () => {

    //Paginacion
    // const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonPerPage, setPokemonPerPage] = useState(100)

    


    const [inputValue, setInputValue] = useState("")
    const [typeSelected, setTypeSelected] = useState("allPokemons")

    const trainer = useSelector(store => store.trainer)

    const inputSearch = useRef()


    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1200'
    const [pokemons, getpokemons, getTypepokemon] = useFetch(url)


    useEffect(() => {
        if(typeSelected === 'allPokemons'){
            getpokemons()
        } else {
            getTypepokemon(typeSelected)
        }
        
    },[typeSelected])

    

    // pokemons?.results.map
    // console.log(pokemons)

    const handleSearch = e => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.trim().toLowerCase())
    }

    const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))
    

    //Get current posts PAGINACION
    const indexOfLastPost = currentPage * pokemonPerPage
    const indexOfFirstPost = indexOfLastPost - pokemonPerPage
    const currentPosts = pokeFiltered?.slice(indexOfFirstPost, indexOfLastPost)

    //Change Page
    // const paginate = pageNumber => setCurrentPage(pageNumber)

    // // const handlePageClick = (data) => {
    // //     const currentPage = data.selected + 1 
    // // }


  return (
    <div className="pokedex-page">
        <header className="red-rectangle-list">
            <div className="black-rectangle-list"></div>
            <div className="circle-list"></div>
            <img className="logo-pokedex-list" src="/logo-pokedex.png" alt="logo pokedex" />
        </header>

        <aside className="aside-container">
            <h2 className="title-list"><span className="span-name">Welcome {trainer}</span>, here you can find your favorite pokemon</h2>
            <form className="form-container-list" onSubmit={handleSearch}>
                <div className="search-container">
                    <input className="input-search" ref={inputSearch} type="text" placeholder="Search pokemon by name"/>
                    <button className="btn-search">Search</button>
                </div>
                <SelectType 
                setTypeSelected={setTypeSelected}
                setCurrentPage={setCurrentPage}
                />
            </form>    
        </aside>

        <Pagination 
            pokemonPerPage={pokemonPerPage}
            currentPage={currentPage}
            totalPokemon={pokeFiltered?.length}
            setCurrentPage={setCurrentPage}
        />

        <div className="cards-container">
            {
                currentPosts?.map(pokemon => (
                    <PokeCard 
                        key={pokemon.url}
                        url={pokemon.url}
                    />
                ))
            }
        </div>

        <Pagination 
            pokemonPerPage={pokemonPerPage}
            currentPage={currentPage}
            totalPokemon={pokeFiltered?.length}
            setCurrentPage={setCurrentPage}
        />

    </div>
  )
}

export default PokedexPage