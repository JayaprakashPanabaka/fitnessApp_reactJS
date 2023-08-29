import React from 'react'
import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../assets/Images/header_bg_1.jpg'
import StoryImage from '../../assets/Images/about1.jpg'
import VisionImage from '../../assets/Images/about2.jpg'
import MissionImage from '../../assets/Images/about3.jpg'


const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores nam minima? Voluptas modi tempore voluptatem suscipit animi ratione doloribus.
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our-Story-Image" />
          </div>

          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem possimus delectus amet eius non quaerat, fuga mollitia enim nesciunt odio. Nostrum repellendus vel dolorem illum magni, dolores explicabo aspernatur aperiam quidem sunt quisquam exercitationem veritatis cum minus! Minus ut voluptas perferendis, sit necessitatibus dolorem.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptatem atque molestiae recusandae iusto libero quidem, corrupti, dignissimos beatae, dolore est numquam magni laboriosam? Voluptas?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, reiciendis sint illum nisi incidunt rem.</p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem possimus delectus amet eius non quaerat, fuga mollitia enim nesciunt odio. Nostrum repellendus vel dolorem illum magni, dolores explicabo aspernatur aperiam quidem sunt quisquam exercitationem veritatis cum minus! Minus ut voluptas perferendis, sit necessitatibus dolorem.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptatem atque molestiae recusandae iusto libero quidem, corrupti, dignissimos beatae, dolore est numquam magni laboriosam? Voluptas?</p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Our-Vision-Image" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our-Mission-Image" />
          </div>

          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem possimus delectus amet eius non quaerat, fuga mollitia enim nesciunt odio. Nostrum repellendus vel dolorem illum magni, dolores explicabo aspernatur aperiam quidem sunt quisquam exercitationem veritatis cum minus! Minus ut voluptas perferendis, sit necessitatibus dolorem.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptatem atque molestiae recusandae iusto libero quidem, corrupti, dignissimos beatae, dolore est numquam magni laboriosam? Voluptas?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, reiciendis sint illum nisi incidunt rem.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
