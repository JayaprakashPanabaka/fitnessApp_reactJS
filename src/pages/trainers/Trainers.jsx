import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../assets/Images/header_bg_5.jpg'
import {trainers} from '../../data'
import {FaInstagram} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import './trainers.css'

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime dolore ea excepturi aspernatur ullam!
      </Header>

      <section className="trainers">
        <div className="container trainers_container">
          {
            trainers.map(({id, image, name, job, socials}) => {
             return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <FaInstagram />, link: socials[0]},
                  {icon: <AiOutlineTwitter />, link: socials[1]},
                  {icon: <FaFacebookF />, link: socials[2]},
                  {icon: <FaLinkedinIn />, link: socials[3]}
                ]
              } />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers
