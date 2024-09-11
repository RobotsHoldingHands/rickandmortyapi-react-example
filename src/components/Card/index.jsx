import './styles.css';

export default function Card({ character }) {
    return (
        <div className="card card-1">
            <div className="top">
                <img src={character.image} />
            </div>
            <div className="bottom">
                <p>{character.name}</p>
            </div>
        </div>
    )
}