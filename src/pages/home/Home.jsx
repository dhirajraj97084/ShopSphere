import React from 'react'
import Layout from '../../component/layout/Layout'
import Hero from '../../component/hero/Hero'
import Category from '../../component/category/Category'
import HeroPageCard from '../../component/heropageProduct card/HeroPageCard'
import Track from '../../component/track/Track'
import Testimonial from '../../component/testimonial/Testimonial'

function Home() {
  return (
    <Layout>
      <Hero/>
      <Category/>
      <HeroPageCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home
