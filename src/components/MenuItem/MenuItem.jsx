import { withRouter } from 'react-router-dom';
import './menuItem.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div
            className={`menu-item ${size}`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className='bgImage' style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);