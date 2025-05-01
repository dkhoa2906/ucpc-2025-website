import React from 'react';
import Header from './header'; 
import Rules from '../../components/Rules/Rules';
import Footer from '../../components/Footer/footer';
import Intro from '../../components/Intro/Intro';
import FadeInSection from '../../components/FadeInSection';
function Home() {
  return (
    
    <div className="flex flex-col w-full space-y-7 bg-gradient-to-br from-[#492A51] via-[#1F2937] to-[#374151] text-white">
      <Header />
      <FadeInSection>
        <Intro />
      </FadeInSection>
      
      <div className="section_end h-16"></div>
      <FadeInSection>
      <Rules />
      </FadeInSection>
      <div className="section_end h-16"></div>

      <Footer />
       
    </div>
    
  );
}

export default Home;
