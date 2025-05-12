import MainLayout from '@/components/layout/MainLayout';
import Carousel from '@/components/home/Carousel';
import AboutSection from '@/components/home/About';
import ServicesSection from '@/components/home/Services';
import DonateSection from '@/components/home/Donate';
import CausesSection from '@/components/home/Causes';
import FactsSection from '@/components/home/Facts';
import TeamSection from '@/components/home/Team';
import TestimonialSection from '@/components/home/Testimonial';
import VolunteerSection from '@/components/home/Volunteer';
import EventSection from '@/components/home/Event';
import BlogSection from '@/components/home/Blog';
import Newsletter from '@/components/home/Newsletter';
import HowItWorks from '@/components/home/HowItWorks';

// Importe seus dados personalizados para substituir os dados padrão
// import aboutData from '@/data/petitionCampaign/aboutData';
// import carouselData from '@/data/petitionCampaign/carouselData';
// import servicesData from '@/data/petitionCampaign/servicesData';
// import donateData from '@/data/petitionCampaign/donateData';
// import causesData from '@/data/petitionCampaign/causesData';
// import factsData from '@/data/petitionCampaign/factsData';
// import teamData from '@/data/petitionCampaign/teamData';
// import testimonialData from '@/data/petitionCampaign/testimonialData';
// import eventData from '@/data/petitionCampaign/eventData';
// import blogData from '@/data/petitionCampaign/blogData';
// import newsletterData from '@/data/petitionCampaign/newsletterData';

export default function Home() {
  return (
    <MainLayout>
      <Carousel 
        // data={carouselData} 
      />
      <AboutSection 
        // data={aboutData}
      />
      <HowItWorks />
      <ServicesSection 
        // data={servicesData}
      />
      <DonateSection 
        // data={donateData}
      />
      {/* <CausesSection 
        // data={causesData}
      />
      <FactsSection 
        // data={factsData}
      />
      <TeamSection 
        // data={teamData}
      />
      <TestimonialSection 
        // data={testimonialData}
      />
      <EventSection 
        // data={eventData}
      />
      <VolunteerSection 
        // data={volunteerData}
      />
      <BlogSection 
        // data={blogData}
      />
      <Newsletter 
        // data={newsletterData}
      /> */}
    </MainLayout>
  );
}
