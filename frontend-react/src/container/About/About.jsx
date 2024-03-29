import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion';
// import {images} from '../../constants'
import {urlFor, client} from '../../client'

import {AppWrap, MotionWrap} from '../../wrapper';
import './About.scss';

// const abouts = [
//   {title: 'Web Development', description: 'Frontend & Backend Development.', imgUrl: images.about01 },
//   {title: 'Frontend Web Design', description: 'Excellent Responsive Design.', imgUrl: images.about02 },
//   {title: 'UI/UX OR MERN Stack', description: 'Sandwiches should be stacked.', imgUrl: images.about03 },
//   {title: 'Web Animations', description: 'I can Animate.', imgUrl: images.about04 },
// ];

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect (() => {
      const query = '*[_type == "abouts"]';

      client.fetch(query)
        .then((data) => setAbouts(data))
    }, []);

  return (
    <>
      <h2 className='head-text'>
        I Know That
        <span> Good Design</span>
        <br />
        Means
        <span> Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.25}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title} </h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description} </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);