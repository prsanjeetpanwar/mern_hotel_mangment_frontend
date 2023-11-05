import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Features from '../../components/features/Features'
import PropertyList from '../../components/propertylist/PropertyList'
import FeaturePropery from '../../components/featuredProperty/FeaturePropery'
 import './Home.css'
import MailList from '../../components/maillist/MailList'
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <div className='homeContainer'>
      <Features/>
      <h1 className="homeTitle">Browse by property type</h1>
<PropertyList/>
<h1 className="homeTitle">Home guest Love</h1>
<FeaturePropery/>
<MailList/>
<Footer/>

    </div>
    </div>
  )
}

export default Home
