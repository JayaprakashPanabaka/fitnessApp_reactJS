import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../assets/Images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autem quo perferendis molestias nulla consequuntur?
      </Header>

      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="mailto:jpanabaka1729@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail /></a>
            <a href="http://m.me/ernest_achiever" target='_blank' rel='noreferrer noopener'><BsMessenger /></a>
            <a href="http://wa.me/+918099099546" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
