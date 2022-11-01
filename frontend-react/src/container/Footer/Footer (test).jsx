import React, { useState } from 'react';

import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

// import {FormErrors} from '../../FormErrors';


const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData;
  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: email,
      message: message,
// added below
      // formErrors: {name: '', email: '', message: ""},
      // nameValid: false,
      // emailValid: false,
      // messageValid: false,
      // formValid: false,

      // this.setState({e.target}, 
      //     () => {this.validateField.{e.target}})
// added above
    }
    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

// added below
  // validateField(fieldName, {e.target}) {
  //   let fieldValidationErrors = this.state.formErrors;
  //   let nameValid = this.state.nameValid;
  //   let emailValid = this.state.emailValid;
  //   let messageValid = this.state.messageValid;

  //   switch(fieldName) {
  //     case 'name':
  //       nameValid = {e.target}.length >= 2;
  //       fieldValidationErrors.name = nameValid ? '' : ' is invalid';
  //       break;
  //     case 'email':
  //       emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  //       fieldValidationErrors.email = emailValid ? '' : ' is invalid';
  //       break;
  //     case 'message':
  //       messageValid = value.length = 0;
  //       fieldValidationErrors.message = messageValid ? '': ' is too short';
  //       break;
  //     default:
  //       break;
  //     }
  //   this.setState({formErrors: fieldValidationErrors,
  //       nameValid: nameValid,
  //       emailValid: emailValid,
  //       messageValid: messageValid
  //     }, this.validateForm);
  //   }

  //   validateForm() {
  //     this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.messageValid});
  //   }

  //   errorClass(error) {
  //     return(error.length === 0 ? '' : 'has-error');
  //   }
// added above
  }




  return (
    <>
      <h2 className='head-text'>Connect with Me!</h2>
      {/* <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:davidmichaelwilson81@gmail.com' className='p-text'>davidmichaelwilson81@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +1 (254) 595-2575' className='p-text'>+1 (254) 595-2575</a>
        </div>
      </div> */}

    {!isFormSubmitted ?

      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
            <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>

      : <div>
          <div className="app__contact-logo">
            <img src={images.wmstudiosGR} alt="Walter Studios Media" />
          </div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
    }

    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);