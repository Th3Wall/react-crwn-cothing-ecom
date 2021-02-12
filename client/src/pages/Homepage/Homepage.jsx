import Directory from '../../components/Directory/Directory';
import { HomepageContainer } from './homepage.styles';

const Homepage = () => {
    return (
        <HomepageContainer
            initial={{ opacity: 0, y: '50px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '50px' }}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            <Directory />
        </HomepageContainer>
    )
}

export default Homepage;