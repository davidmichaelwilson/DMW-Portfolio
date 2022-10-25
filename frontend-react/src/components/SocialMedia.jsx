import React from 'react'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://www.linkedin.com/in/davidmichaelwilson1981' rel='noreferrer' target="_blank">
            <BsLinkedin /></a>
        </div>
        <div>
          <a href='https://www.instagram.com/walterstudiosmedia' rel='noreferrer' target="_blank">
            <BsInstagram /></a>
        </div>
        <div>
          <a href='https://github.com/davidmichaelwilson' rel='noreferrer' target="_blank">
            <BsGithub /></a>
        </div>
        {/* <div>
            <FaFacebookF />
        </div> */}
    </div>
  )
}

export default SocialMedia