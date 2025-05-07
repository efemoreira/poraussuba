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

export default function Home() {
  return (
    <MainLayout>
      <Carousel />
      <AboutSection />
      <ServicesSection />
      <DonateSection />
      <CausesSection />
      <FactsSection />
      <TeamSection />
      <TestimonialSection />
      <VolunteerSection />
      <EventSection />
      <BlogSection />
    </MainLayout>
  );
}
