import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import Logo from '../assets/Images/logo.png'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
// import '../pages/home/home.css'




const Footer1 = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to='/' className='logo'>
                    <img src={Logo} alt="Footer-Logo" />
                </Link>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quod consequuntur pariatur eveniet obcaecati quidem.
                </p>
                <div className="footer_socials">
                    <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener'>
                        <FaLinkedin />
                    </a>

                    <a href="https://facebook.com" target='_blank' rel='noreferrer noopener'>
                        <FaFacebookF />
                    </a>

                    <a href="https://twitter.com" target='_blank' rel='noreferrer noopener'>
                        <AiFillTwitterCircle />
                    </a>

                    <a href="https://instagram.com" target='_blank' rel='noreferrer noopener'>
                        <AiFillInstagram />
                    </a>
                </div>
            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </article>

            <article>
                <h4>Insights</h4>
                <Link to='/s'>Blog</Link>
                <Link to='/s'>Case Studies</Link>
                <Link to='/s'>Events</Link>
                <Link to='/s'>Communities</Link>
                <Link to='/s'>FAQs</Link>
            </article>

            <article>
                <h4>Get In Touch</h4>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/s'>Support</Link>
            </article>
            
        </div>
        <div className="footer_copyright">
            <small>2023 JP TUTORIALS &copy; ALL RIGHTS RESERVED</small>
        </div>
    </footer>
  )
}

export default Footer1
