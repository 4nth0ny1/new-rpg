const Card = (props) => {

    const handleCardClick = () => {
        props.addToCardContainer(props.card, props.player)
    }

    return(
        <div className="card" key={props.card.id} onClick={handleCardClick}>
            <img className="card-image" alt={props.card.name} src={props.card.image} />
            <div>{props.card.name} <br></br> ⚔️ {props.card.attack} 🛡 {props.card.defense}</div>
        </div>
    )
}

export default Card 