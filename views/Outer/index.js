import React from 'react'
import Gooery from '../../components/GooeryAnimation'
import DecryptText from '../../components/DecryptText'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const Outer = ({ data: {
    title1,
    title2,
    decrypTexts,
    desciption,
    button
} }) => {
    return (
        <div className='ai-outer'>
            <div className='container'>
                <div className='ai-outer-container d-flex justify-content-between align-items-center'>
                    <motion.div 
                        className='ai-outer-text'
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={itemVariants} className='ai-outer-heading'>
                            {title1}
                        </motion.div>
                        <motion.div variants={itemVariants} className='ai-outer-heading'>
                            {title2}
                        </motion.div>
                        <motion.div variants={itemVariants} className='ai-outer-heading2'>
                            <DecryptText
                                values={decrypTexts}
                            />
                        </motion.div>
                        <motion.div variants={itemVariants} className='ai-outer-description'>
                            {desciption}
                        </motion.div>
                        <motion.div variants={itemVariants} className='ai-outer-contact'>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={button?.onClick} 
                                className='ai-button'
                            >
                                {button?.label}
                            </motion.button>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className='ai-outer-gooery'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    >
                        <Gooery />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

Outer.propTypes = {}

export default Outer