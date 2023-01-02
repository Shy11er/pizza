import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLinks = (props) => {

    const animateFrom = {opacity: 0, y: -40};
    const animateTo = {opacity: 1, y: 0};

    return (
        <ul>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.05}}
                onClick={() => props.isMobile && props.closeMobileMenu()}
                className='link_box'>
                    <Link className='link' to="/">Home</Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.10}}
                onClick={() => props.isMobile && props.closeMobileMenu()}
                className='link_box'>
                    <Link className='link' to='/menu' >Menu</Link>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo} 
                transition={{delay: 0.20}}
                onClick={() => props.isMobile && props.closeMobileMenu()}
                className='link_box'>
                    <Link className='link' to="/service">Service</Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.30}}
                onClick={() => props.isMobile && props.closeMobileMenu()}
                className='link_box'>
                    <Link className='link' to="/blog">Blog</Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.40}}
                onClick={() => props.isMobile && props.closeMobileMenu()}
                className='link_box'>
                    <Link className='link' to="/about">About</Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.50}}
                onClick={() => props.isMobile && props.closeMobileMenu()}
                className='link_box'>
                    <Link className='link' to="/contact">Contact</Link>
            </motion.li>
        </ul>
    );
}

export default NavLinks