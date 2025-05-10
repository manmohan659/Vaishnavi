import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Statistics from './Statistics';
import PracticeAreas from './PracticeAreas';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { Scale, Calendar, Building2, GraduationCap, Plane, ChevronRight } from 'lucide-react';

const LegalPortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    document.documentElement.style.scrollBehavior = 'smooth';


    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const handleMenuClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen bg-rich-black ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
      {isLoading && (
        <div className="fixed inset-0 bg-rich-darkest flex items-center justify-center z-50">
          <Scale className="text-emerald-light animate-spin" size={48} />
        </div>
      )}
      
      <Navigation 
        isScrolled={isScrolled} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        onMenuClick={handleMenuClick}
      />
      
      <main>

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <Statistics />
        </section>

        <section id="practice">
          <PracticeAreas />
        </section>

        {/* Experience Section - Divided into Education and Professional Experience */}
        <section id="experience" className="py-24 md:py-32 bg-rich-black relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-noise-pattern opacity-[0.02] mix-blend-soft-light"></div>
          <div className="absolute -top-40 left-0 w-1/3 h-1/3 bg-emerald-dark/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-64 h-64 bg-emerald-dark/5 blur-[100px] rounded-full"></div>

          <div className="container relative z-10">
            {/* Story intro */}
            <div className="mb-16 max-w-3xl mx-auto text-center">
              <p className="text-silver text-xl italic leading-relaxed">
                My journey in international legal practice has taken me from academic excellence to specialized practice,
                building expertise across jurisdictions while crafting innovative legal solutions for diverse clients.
              </p>
            </div>

            {/* Education Section */}
            <div className="mb-32">
              <div className="grid grid-cols-12 mb-16 items-end">
                <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
                  <div className="flex items-center mb-4">
                    <div className="h-px w-12 bg-emerald opacity-30 mr-4"></div>
                    <span className="text-sm uppercase tracking-widest text-emerald/80">Academic Path</span>
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
                    <span className="gradient-text">Education</span>
                  </h2>
                </div>
              </div>

              <div className="relative">
                {/* Timeline line for Education */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-emerald-dark/30 to-transparent hidden lg:block"></div>

                {/* Education Cards */}
                <div className="space-y-20">
                  {/* University of Mumbai - Bachelor's */}
                  <div id="mumbai-edu" className="glass-card p-8 md:p-10 lg:p-12 hover:shadow-emerald-sm transition-all duration-500 ease-elegant relative lg:ml-6 lg:mr-auto lg:w-[calc(50%-24px)]">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-4 space-y-6">
                        <div className="inline-flex glass-card p-3 rounded-xl bg-glass-light backdrop-filter backdrop-blur-xl mb-4">
                          <GraduationCap className="text-emerald" size={24} />
                        </div>

                        <h3 className="text-2xl font-serif font-light text-white">
                          Bachelor of Laws
                        </h3>

                        <div className="space-y-1 text-silver">
                          <p className="font-medium text-lg">University of Mumbai</p>
                          <p className="font-medium text-lg">Mumbai, India</p>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 text-emerald-light" size={16} />
                            <span>2015 - 2019</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-8">
                        <div className="relative pl-6 border-l border-glass-medium space-y-6">
                          {[
                            'Foundation in Indian Constitutional Law and Legal Procedures with honors.',
                            'Active member of the University Legal Aid Society, providing assistance to underserved communities.',
                            'Received merit scholarship for academic excellence throughout the program.'
                          ].map((point, index) => (
                            <div key={index} className="animated-element">
                              <p className="text-silver text-lg leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Direct Connection with Inline Styles */}
                    <div style={{
                      position: 'absolute',
                      bottom: '-150px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 50,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}>
                      {/* Vertical Line */}
                      <div style={{
                        width: '4px',
                        height: '100px',
                        background: 'linear-gradient(to bottom, rgba(16, 185, 129, 0.6), rgba(52, 211, 153, 0.9))',
                        marginBottom: '10px',
                        boxShadow: '0 0 10px rgba(52, 211, 153, 0.8)'
                      }}></div>

                      {/* Plane */}
                      <Plane
                        style={{
                          color: 'rgb(52, 211, 153)',
                          filter: 'drop-shadow(0 0 8px rgba(52, 211, 153, 0.9))',
                          transform: 'rotate(90deg)'
                        }}
                        size={48}
                        strokeWidth={2}
                        fill="rgba(52, 211, 153, 0.4)"
                      />
                    </div>

                    {/* Horizontal Connection with Inline Styles */}
                    <div style={{
                      position: 'absolute',
                      bottom: '-150px',
                      left: '50%',
                      right: '-150px',
                      zIndex: 50,
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {/* Horizontal Line */}
                      <div style={{
                        height: '4px',
                        flex: 1,
                        background: 'linear-gradient(to right, rgba(16, 185, 129, 0.6), rgba(52, 211, 153, 0.9))',
                        boxShadow: '0 0 10px rgba(52, 211, 153, 0.8)'
                      }}></div>

                      {/* Plane */}
                      <div style={{position: 'absolute', right: '0'}}>
                        <Plane
                          style={{
                            color: 'rgb(52, 211, 153)',
                            filter: 'drop-shadow(0 0 8px rgba(52, 211, 153, 0.9))'
                          }}
                          size={48}
                          strokeWidth={2}
                          fill="rgba(52, 211, 153, 0.4)"
                        />
                      </div>
                    </div>
                  </div>

                  {/* University of Bangalore - Master's */}
                  <div id="bangalore-edu" className="glass-card p-8 md:p-10 lg:p-12 hover:shadow-emerald-sm transition-all duration-500 ease-elegant relative lg:ml-auto lg:mr-6 lg:w-[calc(50%-24px)]">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-4 space-y-6">
                        <div className="inline-flex glass-card p-3 rounded-xl bg-glass-light backdrop-filter backdrop-blur-xl mb-4">
                          <GraduationCap className="text-emerald" size={24} />
                        </div>

                        <h3 className="text-2xl font-serif font-light text-white">
                          Master of Laws
                        </h3>

                        <div className="space-y-1 text-silver">
                          <p className="font-medium text-lg">University of Bangalore</p>
                          <p className="font-medium text-lg">Bangalore, India</p>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 text-emerald-light" size={16} />
                            <span>2019 - 2021</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-8">
                        <div className="relative pl-6 border-l border-glass-medium space-y-6">
                          {[
                            'Specialized in International Business Law with focus on cross-border transactions and regulatory frameworks.',
                            'Conducted research on emerging legal challenges in global digital commerce and fintech regulations.',
                            'Published paper on comparative analysis of privacy laws in India and the European Union.'
                          ].map((point, index) => (
                            <div key={index} className="animated-element">
                              <p className="text-silver text-lg leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Direct Connection with Inline Styles - Bangalore to Queens */}
                    <div style={{
                      position: 'absolute',
                      bottom: '-150px',
                      left: '-150px',
                      right: '50%',
                      zIndex: 50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start'
                    }}>
                      {/* Plane */}
                      <div style={{position: 'absolute', left: '0'}}>
                        <Plane
                          style={{
                            color: 'rgb(52, 211, 153)',
                            filter: 'drop-shadow(0 0 8px rgba(52, 211, 153, 0.9))',
                            transform: 'scaleX(-1)'
                          }}
                          size={48}
                          strokeWidth={2}
                          fill="rgba(52, 211, 153, 0.4)"
                        />
                      </div>

                      {/* Horizontal Line */}
                      <div style={{
                        height: '4px',
                        flex: 1,
                        background: 'linear-gradient(to left, rgba(16, 185, 129, 0.6), rgba(52, 211, 153, 0.9))',
                        boxShadow: '0 0 10px rgba(52, 211, 153, 0.8)'
                      }}></div>
                    </div>
                  </div>

                  {/* Queens Law School - Master's */}
                  <div id="queens-edu" className="glass-card p-8 md:p-10 lg:p-12 hover:shadow-emerald-sm transition-all duration-500 ease-elegant relative lg:ml-6 lg:mr-auto lg:w-[calc(50%-24px)]">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-4 space-y-6">
                        <div className="inline-flex glass-card p-3 rounded-xl bg-glass-light backdrop-filter backdrop-blur-xl mb-4">
                          <GraduationCap className="text-emerald" size={24} />
                        </div>

                        <h3 className="text-2xl font-serif font-light text-white">
                          Master of Laws (LL.M)
                        </h3>

                        <div className="space-y-1 text-silver">
                          <p className="font-medium text-lg">Queens Law School</p>
                          <p className="font-medium text-lg">New York, USA</p>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 text-emerald-light" size={16} />
                            <span>2021 - 2023</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-8">
                        <div className="relative pl-6 border-l border-glass-medium space-y-6">
                          {[
                            'Specialized in International Law and Cross-Border Legal Frameworks with focus on US-India relations.',
                            'Published research on the evolution of contract law in digital economies across international jurisdictions.',
                            'Graduated with honors and recognition for contributions to international legal scholarship.'
                          ].map((point, index) => (
                            <div key={index} className="animated-element">
                              <p className="text-silver text-lg leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Experience Section */}
            <div>
              <div className="grid grid-cols-12 mb-16 items-end">
                <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
                  <div className="flex items-center mb-4">
                    <div className="h-px w-12 bg-emerald opacity-30 mr-4"></div>
                    <span className="text-sm uppercase tracking-widest text-emerald/80">Career Journey</span>
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
                    Professional <span className="gradient-text">Experience</span>
                  </h2>
                </div>
              </div>

              <div className="relative">
                {/* Timeline line for Professional Experience */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-emerald-dark/30 to-transparent hidden lg:block"></div>

                {/* Professional Experience Cards */}
                <div className="space-y-20">
                  {/* Sr. Legal Associate - Writer Information (First) */}
                  <div id="writer-exp" className="glass-card p-8 md:p-10 lg:p-12 hover:shadow-emerald-sm transition-all duration-500 ease-elegant relative lg:ml-6 lg:mr-auto lg:w-[calc(50%-24px)]">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-4 space-y-6">
                        <div className="inline-flex glass-card p-3 rounded-xl bg-glass-light backdrop-filter backdrop-blur-xl mb-4">
                          <Building2 className="text-emerald" size={24} />
                        </div>

                        <h3 className="text-2xl font-serif font-light text-white">
                          Sr. Legal Associate
                        </h3>

                        <div className="space-y-1 text-silver">
                          <p className="font-medium text-lg">Writer Information</p>
                          <p className="font-medium text-lg">Mumbai, India</p>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 text-emerald-light" size={16} />
                            <span>Apr 2022 - May 2023</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-8">
                        <div className="relative pl-6 border-l border-glass-medium space-y-6">
                          {[
                            'Managed end-to-end contract lifecycle from drafting to negotiations and renewal, ensuring legal compliance and risk mitigation.',
                            'Coordinated with legal team and stakeholders to develop standardized contract templates and processes.',
                            'Handled service contracts and commercial agreements for multinational transactions spanning US and Indian jurisdictions.'
                          ].map((point, index) => (
                            <div key={index} className="animated-element">
                              <p className="text-silver text-lg leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Plane Animation to Next Card */}
                    <div className="block absolute -bottom-20 right-0 transform translate-x-1/2 z-20 timeline-connection">
                      <div className="relative flex items-center justify-center">
                        <div className="timeline-path w-60"></div>
                        <Plane className="timeline-plane-right" size={48} strokeWidth={2} fill="rgba(52, 211, 153, 0.3)" />
                      </div>
                    </div>
                  </div>

                  {/* Advocate Associate - I.V Merchant (Second) */}
                  <div id="ivmerchant-exp" className="glass-card p-8 md:p-10 lg:p-12 hover:shadow-emerald-sm transition-all duration-500 ease-elegant relative lg:ml-auto lg:mr-6 lg:w-[calc(50%-24px)]">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-4 space-y-6">
                        <div className="inline-flex glass-card p-3 rounded-xl bg-glass-light backdrop-filter backdrop-blur-xl mb-4">
                          <Building2 className="text-emerald" size={24} />
                        </div>

                        <h3 className="text-2xl font-serif font-light text-white">
                          Advocate Associate
                        </h3>

                        <div className="space-y-1 text-silver">
                          <p className="font-medium text-lg">I.V Merchant & Company</p>
                          <p className="font-medium text-lg">Delhi, India</p>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 text-emerald-light" size={16} />
                            <span>May 2023 - Present</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-8">
                        <div className="relative pl-6 border-l border-glass-medium space-y-6">
                          {[
                            'Drafted and vetted comprehensive legal documents including leases, licenses, and agreements across international jurisdictions.',
                            'Researched US laws including Small Business Entity Tax Pass Through Act and implemented compliance measures.',
                            'Drafted website policies and contracts for global compliance with regulations including COPPA and GDPR.'
                          ].map((point, index) => (
                            <div key={index} className="animated-element">
                              <p className="text-silver text-lg leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Plane Animation to Next Card */}
                    <div className="block absolute -bottom-20 left-0 transform -translate-x-1/2 z-20 timeline-connection">
                      <div className="relative flex items-center justify-center">
                        <div className="timeline-path w-60"></div>
                        <Plane className="timeline-plane-left" size={48} strokeWidth={2} fill="rgba(52, 211, 153, 0.3)" />
                      </div>
                    </div>
                  </div>

                  {/* Legal Intern - XYZ (Third/Last) */}
                  <div id="xyz-exp" className="glass-card p-8 md:p-10 lg:p-12 hover:shadow-emerald-sm transition-all duration-500 ease-elegant relative lg:ml-6 lg:mr-auto lg:w-[calc(50%-24px)]">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-4 space-y-6">
                        <div className="inline-flex glass-card p-3 rounded-xl bg-glass-light backdrop-filter backdrop-blur-xl mb-4">
                          <Building2 className="text-emerald" size={24} />
                        </div>

                        <h3 className="text-2xl font-serif font-light text-white">
                          Legal Intern
                        </h3>

                        <div className="space-y-1 text-silver">
                          <p className="font-medium text-lg">XYZ Legal</p>
                          <p className="font-medium text-lg">New York, USA</p>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-2 text-emerald-light" size={16} />
                            <span>Jan 2023 - Present</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-8">
                        <div className="relative pl-6 border-l border-glass-medium space-y-6">
                          {[
                            'Assisted senior attorneys in researching cross-border legal precedents and preparing comprehensive briefs.',
                            'Contributed to international compliance documentation and regulatory framework analysis.',
                            'Participated in client consultations and developed draft responses to complex legal inquiries.'
                          ].map((point, index) => (
                            <div key={index} className="animated-element">
                              <p className="text-silver text-lg leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPortfolio;