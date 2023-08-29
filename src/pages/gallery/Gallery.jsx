import React from 'react'
import './gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../assets/Images/header_bg_3.jpg'

const Gallery = () => {
  const galleryLength = 15;
  const images = [];
  // console.log(images);

  for(let i = 1; i <= galleryLength; i++) {
    images.push(`../../assets/Images/gallery${i}.jpg`);
    // images.push(i)
    // console.log(i);

  }

  console.log(images[0]);

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nam labore voluptates veritatis? Saepe, laboriosam!
      </Header>

      <section className="gallery">
        <div className="container gallery_container">
          {
            images.map((image, index) => {
              return (
                <article key={index}>
                  <img src={image} alt={`Gallery Image ${index+1}`} />
                </article>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery
