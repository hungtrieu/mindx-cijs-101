import './Card.css';

const Card = (props) => {
    console.log(props);
    const { name, price, click } = props;
    return (
        <div className="card">
            <div className="name">Name: {name}</div>
            <div className="price">Price: {Number(price).toLocaleString()}</div>
            {props.children}
        </div>
    )
}

export default Card;