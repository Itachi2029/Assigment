import './Card.css';

export default function Card(props){

    const{img,description,price,title}=props
    return(
        <div className='card'>
            <img src={img} alt='cfh'></img>
            <p className='title'>{title}</p>
            <p className='story'>{description}</p>
            <p className='price'>{price}</p>
            <div className='sign'>@</div>
        </div>
    )
}