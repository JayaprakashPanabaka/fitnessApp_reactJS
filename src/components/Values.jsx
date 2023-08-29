import React from 'react'
import Image from '../assets/Images/Values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {SiOpenaigym} from 'react-icons/si'
import {values} from '../data'
import Card from '../../public/Card'



const Values = () => {
  return (
    <section className='values'>
        <div className="container values_container">
            <div className="values_left">
                <div className="values_image">
                    <img src={Image} alt="Values-Image" />
                </div>
            </div>
            <div className="values_right">
                <SectionHead icon={<GiCutDiamond />} title="Values" />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam repellendus mollitia ad repudiandae voluptatibus aspernatur?
                </p>
                <div className="values_wrapper">
                    {
                        values.map(({id, title, desc}) => {
                            return (
                                <Card key={id} className='values_value'>
                                    <span><SiOpenaigym /></span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values
