import './singleCharacterPage.scss';
import AppBanner from '../appBanner/AppBanner';

const SingleCharacterPage = () => {
    const data = JSON.parse(localStorage.getItem('charData'));

    const {name, description, thumbnail} = data[0];

    return (
        <>
            <AppBanner />
            <div className="single-char">
                <img src={thumbnail} alt={name} className="single-char__char-img"/>
                <div className="single-char__info">
                    <h2 className="single-char__name">{name}</h2>
                    <p className="single-char__descr">{description}</p>
                </div>
            </div>
        </>
        
    )
}

export default SingleCharacterPage;