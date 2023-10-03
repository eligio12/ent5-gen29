import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import './styles/HomePage.css'

const HomePage = () => {


    const inputTrainer = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleInput = e => {
        e.preventDefault()
        dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
        navigate('/pokedex')

        

    }

  return (
    <div className="home">
        <header className="header-home">
          <img className="img-pokedex-logo" src="/logo-pokedex.png" alt="img logo" />
          <h1 className="title-home">Hi Trainer!</h1>
          <p className="text-home">To see the information of the pokemon tell me your trainer name.</p>
        </header>
        <form className="form-home" onSubmit={handleInput}>
            <input className="input-home" ref={inputTrainer} type="text" placeholder="Enter your trainer name" />
            <button className="btn-home">Let Start</button>
        </form>
        <div className="red-rectangle">
          <div className="black-rectangle"></div>
          <div className="circle"></div>
        </div>
    </div>
  )
}

export default HomePage