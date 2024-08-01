import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias repellat et quae deserunt perspiciatis minus rem, dolores temporibus adipisci culpa facilis voluptas minima corporis optio delectus, eaque doloribus vel, harum repellendus sint. Repudiandae ad aperiam est odit quae delectus veniam, sunt, quibusdam placeat aut, eveniet eum corrupti corporis porro eligendi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptate quas sunt mollitia, veritatis soluta distinctio, saepe in ad ea totam? Laborum tempore id nihil, eos molestiae, vitae, quas doloribus voluptatum aut dolor esse ipsam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rem doloremque quo!
        </p>
        <p>
          Lorem, ipsum dolor.
        </p>

      </div>
    </div>
  )
}

export default Biography