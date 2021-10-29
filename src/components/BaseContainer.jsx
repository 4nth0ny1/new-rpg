const BaseContainer = (props) => {

    const totalAttack = props.cardContainer.reduce((a, b) => {
        return a + b.attack
      }, 0)
    
      const totalDefense = props.cardContainer.reduce((a, b) => {
        return a + b.defense
      }, 0)

    return(
        <>
        
            { props.cardContainer[0] ? <div className="container">
                <span>⚔️ {totalAttack}</span>
                <span>🛡 {totalDefense}</span>
                <div className="card">
                <img className="card-image" alt={props.cardContainer[0]?.name} src={props.cardContainer[0]?.image} />
                <div>{props.cardContainer[0]?.name} <br></br> ⚔️ {props.cardContainer[0]?.attack} 🛡 {props.cardContainer[0]?.defense}</div>
            </div>
            </div> : <div className="base-area"></div> }
        </>
    )

}

export default BaseContainer