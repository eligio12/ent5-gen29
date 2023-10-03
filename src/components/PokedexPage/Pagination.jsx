import { useState } from "react"

const Pagination = ({currentPage, pokemonPerPage, totalPokemon, setCurrentPage}) => {
    let pageNumbers = []
    const [paginatioFive, setPaginatioFive] = useState([1,2,3,4,5])
    let currentFivePage = 1

    for(let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++){
        pageNumbers.push(i)
    }

    let totalFivePage = Math.ceil(totalPokemon / pokemonPerPage)
    

    

    const sum = () => {
        setCurrentPage(currentPage+1)
    }

    const res = () => {
        setCurrentPage(currentPage-1)
    }

    // let array = []
    // console.log(currentFivePage)
    // console.log(paginatioFive)

    // const handleNextFive = () => {
    //     array = []
        
    //     for(let i = 1; i <=5; i++){
    //         array.push(i+(5*currentFivePage))
    //     }

    //     currentFivePage = currentFivePage++
        
        

    //     setPaginatioFive(array)

    // }

    // const handlePreviewFive = () => {
    //     array= []
    //     currentFivePage = currentFivePage - 1
    //     for(let i = 1; i <=5; i++){
    //         array.push(i + (5*currentFivePage))
    //     }
        
        
    //     setPaginatioFive(array)

    // }





  return (
    
    <div className="pagination-container">
        <button disabled={currentPage === 1} className="res" onClick={res}>Previus</button>
        <div>
            {/* <button disabled={currentFivePage === 1  } className="page_item" onClick={handlePreviewFive}>...</button> */}
            {
                pageNumbers.map((page, i) => {
                    return <button className={currentPage===page ? "page_item active-page" : 'page_item' } key={i} onClick={() => setCurrentPage(page)} > {page} </button>
                })
                

            }
            {/* <button disabled={currentFivePage >= totalFivePage/5} className="page_item" onClick={handleNextFive}>...</button> */}
        </div>
        <button disabled={currentPage >= totalFivePage} className="sum" onClick={sum}>Next</button>
    </div>
    
  )
}

export default Pagination