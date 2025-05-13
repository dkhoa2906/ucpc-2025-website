import React from 'react';
import Header from './header'; 
import Rules from '../../components/Rules/rules';
import Footer from '../../components/Footer/footer';
import Intro from '../../components/Intro/Intro';
import FadeInSection from '../../components/FadeInSection';
import News from '../../components/News/News';
import UITInformation from '../../components/UITInformation/Info';
function Home() {
  return (
    
    <div className="flex flex-col w-full space-y-0 bg-gradient-to-br from-[#492A51] via-[#1F2937] to-[#374151] text-white">
      <Header />
      <FadeInSection>
        <Intro />
      </FadeInSection>
      
      <FadeInSection>
        <News />
      </FadeInSection>
      <FadeInSection>
        <Rules />
      </FadeInSection>
      <FadeInSection>
        <UITInformation />
      </FadeInSection>
      <Footer />
       
    </div>
    
  );
}

export default Home;
