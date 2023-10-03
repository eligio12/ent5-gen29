import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"

const PokeCard = ({ url }) => {

    const [poke, getpoke] = useFetch(url)

    const navigate = useNavigate()

    useEffect(() => {
        getpoke()
    }, [])

    // console.log(poke)

    const handleCard = () => {
        navigate(`/pokedex/${poke.id}`)
    }

  return (
    <article className={`card ${poke?.types[0].type.name}-border` } onClick={handleCard}>
        {
        }
        <header className={`header-card ${poke?.types[0].type.name}`}>
            <img className="img-card" src={poke?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <section className="body-card">
            <h2 className="name-poke">{poke?.name}</h2>
            <ul>
                {
                    poke?.types.map(typeInfo => (
                        <li className="type-poke" key={typeInfo.type.url}>{typeInfo.type.name}/</li>
                        
                    ))
                }
            </ul>
            <p className="type-text">Type</p>
            <hr className="hr-stats" />
            <ul className="stats-list">
                {
                    poke?.stats.map(statInfo => (
                        <li className="stat-container" key={statInfo.stat.url}>
                            <span>{statInfo.stat.name}</span>
                            <span className="number-stat"> {statInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard