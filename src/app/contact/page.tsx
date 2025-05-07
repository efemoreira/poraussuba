import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/common/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Entre em Contato" 
        breadcrumb={[
          { name: 'Home', link: '/' },
          { name: 'Contato', link: '/contact' },
        ]} 
      />
      
      <div className="container mx-auto px-4 lg:px-[60px] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-light p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
              <FaMapMarkerAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-textDark mb-2">Nosso Endereço</h3>
            <p>123 Rua Principal, São Paulo, SP</p>
          </div>
          
          <div className="bg-light p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
              <FaPhoneAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-textDark mb-2">Telefone</h3>
            <p>+55 11 1234-5678</p>
            <p>+55 11 9876-5432</p>
          </div>
          
          <div className="bg-light p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-textDark mb-2">Email</h3>
            <p>info@caridade.org.br</p>
            <p>contato@caridade.org.br</p>
          </div>
        </div>
      </div>
      
      <ContactForm />
      
      <div className="container mx-auto px-4 lg:px-[60px] pb-16">
        <div className="w-full h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976900278125!2d-46.6549887!3d-23.564317399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620345678901!5m2!1spt-BR!2sbr"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Mapa da localização"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;