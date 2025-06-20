import React from 'react'
import { Navbar, Header, BlogList, Newsletter, Footer } from '../components/index'
function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <BlogList/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home