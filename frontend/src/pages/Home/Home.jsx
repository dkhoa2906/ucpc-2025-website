import React from 'react';
import Header from './header'; 
import Rules from '../../components/Rules/rules';
import Footer from '../../components/Footer/footer';
function Home() {
  return (
    
    <div className="flex flex-col w-full pd-16 space-y-7 bg-gradient-to-br from-[#492A51] via-[#1F2937] to-[#374151] text-white">
      <Header />
      <div className="section_end h-16"></div>
      <Rules />
      <div className="section_end h-36"></div>
      <Footer />
       
    </div>
    
  );
}

export default Home;
