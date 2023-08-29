import React, { useState } from 'react'
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../../public/Card'
import SectionHead from './SectionHead'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from '../data'
import avatar1 from '../assets/Images/avatar1.jpg'
import avatar2 from '../assets/Images/avatar2.jpg'
import avatar3 from '../assets/Images/avatar3.jpg'
import avatar4 from '../assets/Images/avatar4.jpg'
import avatar5 from '../assets/Images/avatar5.jpg'

const avatarContainer = [
    {
        id:1,
        url: avatar1
    }, 
    {
        id:2,
        url: avatar2
    },
    {
        id:3,
        url: avatar3
    },
    {
        id:4,
        url: avatar4
    },
    {
        id:5,
        url: avatar5
    },
];

// console.log(avatarContainer);

// avatarContainer.map((item) => {
//     console.log(item.url)
// })


const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index]

    // console.log(avatar);


    const prevTestimonialHandler = () => {
        setIndex(prevState => prevState - 1)

        if(index <= 0) {
            setIndex(testimonials.length - 1)
        }
    }

    const nextTestimonialHandler = () => {
        setIndex(prevState => prevState + 1)

        if(index >= testimonials.length - 1) {
            setIndex(0)
        }
    }

  return (
    <section className='testimonials'>
        <div className="container testimonials_container">
            <SectionHead icon={<ImQuotesLeft />} title="Testimonials" className="testimonials_head" />
            <Card className='testimonial'>
                <div className="testimonial_avatar">
                    {/* {
                        avatarContainer.map((image) => {
                            return (
                                <img key={image.id} src={image.url} alt={name} />
                                // console.log(image.url);
                            )
                        })
                    } */}
                    <img src={avatar} alt={name} />
                </div>
                <p className='testimonial_quote'>{` "${quote}"`}</p>
                <h5>{name}</h5>
                <small 
                className='testimonial_title'
                >
                    {job}
                </small>
            </Card>
            <div className="testimonials_btn-container">
                <button 
                className='testimonials_btn' 
                onClick={prevTestimonialHandler}
                >
                    <IoIosArrowDropleftCircle />
                </button>
                <button 
                className='testimonials_btn' 
                onClick={prevTestimonialHandler}
                >
                    <IoIosArrowDroprightCircle />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials