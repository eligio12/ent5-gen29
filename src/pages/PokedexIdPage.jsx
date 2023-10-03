import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/PokedexIdPage.css'

const PokedexIdPage = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const [pokeId, getPokeId] = useFetch(url)

    useEffect(() => {
        getPokeId()
    }, [id])

    const handleNext = () => {
      navigate(`/pokedex/${pokeId.id+1}`)
    }

    const handlePreview = () => {
      navigate(`/pokedex/${pokeId.id-1}`)
    }

    // console.log(idPoke)

  return (
    <div className="poke-id-container">
      <a className="return-list" href="#/pokedex/">{`<`}</a>
      <header className="red-rectangle-list">
          <div className="black-rectangle-list"></div>
          <div className="circle-list"></div>
          <img className="logo-pokedex-list" src="/logo-pokedex.png" alt="logo pokedex" />
      </header>
      <article className="card-info">
        <header className={`header-card-info ${pokeId?.types[0].type.name}`}>
          <button className="next-preview-poke" onClick={handlePreview}>{`<`}</button>
          <img className="img-card-info" src={pokeId?.sprites.other["official-artwork"].front_default} alt="Poke ID" />
          <button className="next-preview-poke" onClick={handleNext}>{`>`}</button>
        </header>
        <div className="body-card-info">
          <section className="general-info-card-info">
            <div className="id-general-info">#{id}</div>
            <hr className="hr-card-info"/>
            <h1 className="name-poke-card-info">{pokeId?.name}</h1>
            <ul className="weight-height-container">
              <li className="weight-height"><span className="span-weight-height">Weight</span>{pokeId?.weight}</li>
              <li className="weight-height"><span className="span-weight-height">Height</span>{pokeId?.height}</li>
            </ul>
            <ul className="type-habilities-container">
              <li className="type-habilities">
                <span className="span-type-habilities">Type</span>
                <div className="type-habilities-flex">
                {
                    pokeId?.types.map(typeInfo => (
                        <div className={`type-habilities ${typeInfo.type.name}`} key={typeInfo.type.url}>{typeInfo.type.name}</div>
                        
                    ))
                }
                </div>
              </li>

              <li className="type-habilities">
                <span className="span-type-habilities">Type</span>
                <div className="type-habilities-flex">
                {
                    pokeId?.abilities.map(abilityInfo => (
                        <div className="type-habilities ability-card-info" key={abilityInfo.ability.url}>{abilityInfo.ability.name}</div>
                        
                    ))
                }
                </div>
              </li>
            </ul>
          </section>

          <section className="stats-container">
            <hr className="stat-hr"/>
            <h2 className="title-stat">Stats</h2>
            <div className="stat-container">
              {
                pokeId?.stats.map(statInfo => (
                  <article key={statInfo.stat.name} className="stat-container">
                    <header className="stat-name-number">
                      <h3 className="stat-name">{statInfo.stat.name}</h3>
                      <p className="stat-number">{statInfo.base_stat}/255</p>
                    </header>
                    <div className="bar-container">
                      <div className="bar-stat-container" style={{width: `${statInfo.base_stat/255*100}%`}}></div>
                    </div>
                  </article>
                ))
              }
            </div>
          </section>  
          

        </div>
      </article>

      <article className="movement-container">
        <hr className="hr-movement"/>
        <h2 className="title-movement">Movements</h2>
        <div className="name-movement-container">
          {
            pokeId?.moves.map(moveInfo => (
              <p key={moveInfo.move.name} className="name-movement">{moveInfo.move.name}</p>
            ))
          }
        </div>
      </article>
    </div>
  )
}

export default PokedexIdPage