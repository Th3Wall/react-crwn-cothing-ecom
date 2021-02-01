import { withRouter } from 'react-router-dom';
import { BGImage, Tile, TileContentWrp, TileSubtitle, TileTitle } from './menuItem.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <Tile
            size={size}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <BGImage
                imageUrl={imageUrl}
                className='bgImage'
            />
            <TileContentWrp>
                <TileTitle>{title.toUpperCase()}</TileTitle>
                <TileSubtitle>Shop Now</TileSubtitle>
            </TileContentWrp>
        </Tile>
    )
}

export default withRouter(MenuItem);