import React from 'react'
import Haeder from './Haeder';
import Nav from './Nav';
import FootwearAd from './FootwearAd';
import Section from './Section';
import BlackFridaySale from './BlackFridaySale';
import BestSelling from './BestSelling';
import Banner from './Banner';
import Headline from './Headline';
import Category from './Category';
import Logo from './Logo';
import Content from './Content';
import Icon from './Icon';
import Footer from './Footer';
import Pre from './Pre';


const Home = () => {
  return (
    <div>
      <Haeder/>
      <Nav/>
      <FootwearAd/>
      <Section/>
      {/* <BlackFridaySale/> */}
      <BestSelling />
  <Banner />
  <BestSelling />
  <BestSelling />
  <Headline/>
  <Category/>
  <Category/>
  <Category/>
  <Category/>
  <Logo/>
  <Content/>
  <Icon/>
  <Footer/>
<Pre/>
    </div>
  )
}

export default Home;
