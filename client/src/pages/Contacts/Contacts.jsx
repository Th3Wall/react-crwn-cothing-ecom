import { motion } from 'framer-motion';

const ContactsPage = () => (
    <motion.div
        className='contacts-page'
        initial={{ opacity: 0, y: '50px' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '50px' }}
        transition={{ ease: "easeOut", duration: 1 }}
    >
        <h2>Contacts Page</h2>
    </motion.div>
)

export default ContactsPage;