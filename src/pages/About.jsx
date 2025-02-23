import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewslaterBox from '../components/NewslaterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'}/>
      </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Forever was established with the vision of turning a passion for innovation into a platform that redefines what’s possible. From the very beginning, we’ve been driven by a deep desire to revolutionize the way things are done, always pushing beyond conventional limits. Our journey is fueled by the belief that creativity and technology can come together to shape groundbreaking solutions, leading to a future where innovation isn't just an idea but a way of life.</p>
                <p>"Born from a bold idea and a desire to challenge the ordinary, [Brand] is built on a foundation of innovation and creativity. We believe in pushing boundaries and redefining what’s possible, creating solutions that not only solve problems but inspire new ways of thinking.</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>Our mission is to drive innovation that shapes the future. We aim to create impactful solutions, fostering progress and sustainability, while pushing the boundaries of technology and human potential to achieve extraordinary results.</p>
            </div>
    </div>  
          <div className='text-xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
          </div>
          <div className='flex flex-col md:flex-row text-sm mb-20'>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Quality Assurance:</b>
                  <p className='text-gray-600'>We ensure top-quality through rigorous testing and attention to detail, delivering reliable and high-performing solutions you can trust.</p>
              </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Convenience:</b>
                  <p className='text-gray-600'>We focus on creating easy-to-use products that seamlessly fit into your life, saving you time and effort.</p>
              </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Exceptional Customer Service:</b>
                  <p className='text-gray-600'>Our customer service is all about you. We’re here to provide fast, attentive support that ensures your needs are met with care.</p>
              </div>
          </div>
          <NewslaterBox />
    </div>
  )
}

export default About