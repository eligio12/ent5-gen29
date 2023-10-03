import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const SelectType = ({ setTypeSelected, setCurrentPage }) => {
    
    const url = "https://pokeapi.co/api/v2/type"
    const [types, getTypes] = useFetch(url)

    useEffect(() => {
        getTypes()
    }, [])

    // console.log(types)

    const handleChange = e => {
        setTypeSelected(e.target.value)
        setCurrentPage(1)
    }

  return (
    
    <select className="select-type" onChange={handleChange}>
        <option value="allPokemons">All Pokemons</option>
        {
            types?.results.map(type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType