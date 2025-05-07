'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaAngleRight, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-[45px] pt-[90px] bg-dark">
      <div className="container mx-auto px-4 lg:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Contato */}
          <div className="mb-[45px]">
            <h2 className="mb-[30px] text-xl font-bold text-primary">Nosso Contato</h2>
            <p className="text-white mb-2">
              <FaMapMarkerAlt className="inline-block w-[25px] text-white mr-2" />
              123 Rua Principal, São Paulo, SP
            </p>
            <p className="text-white mb-2">
              <FaPhoneAlt className="inline-block w-[25px] text-white mr-2" />
              +55 11 1234-5678
            </p>
            <p className="text-white mb-6">
              <FaEnvelope className="inline-block w-[25px] text-white mr-2" />
              info@caridade.org.br
            </p>
            <div className="mt-5">
              <a href="#" className="inline-flex items-center justify-center w-[40px] h-[40px] mr-1 mb-2 text-primary border border-primary rounded-none hover:bg-primary hover:text-white transition-all">
                <FaTwitter />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-[40px] h-[40px] mx-1 mb-2 text-primary border border-primary rounded-none hover:bg-primary hover:text-white transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-[40px] h-[40px] mx-1 mb-2 text-primary border border-primary rounded-none hover:bg-primary hover:text-white transition-all">
                <FaLinkedinIn />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-[40px] h-[40px] mx-1 mb-2 text-primary border border-primary rounded-none hover:bg-primary hover:text-white transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-[40px] h-[40px] mx-1 mb-2 text-primary border border-primary rounded-none hover:bg-primary hover:text-white transition-all">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mb-[45px]">
            <h2 className="mb-[30px] text-xl font-bold text-primary">Links Rápidos</h2>
            <div className="flex flex-col">
              <Link href="/" className="mb-2.5 text-white hover:text-primary hover:tracking-wider transition-all before:content-['\f105'] before:font-['Font_Awesome_5_Free'] before:font-bold before:mr-2.5">
                <FaAngleRight className="inline-block mr-2" />Página Inicial
              </Link>
              <Link href="/about" className="mb-2.5 text-white hover:text-primary hover:tracking-wider transition-all">
                <FaAngleRight className="inline-block mr-2" />Sobre Nós
              </Link>
              <Link href="/causes" className="mb-2.5 text-white hover:text-primary hover:tracking-wider transition-all">
                <FaAngleRight className="inline-block mr-2" />Nossas Causas
              </Link>
              <Link href="/event" className="mb-2.5 text-white hover:text-primary hover:tracking-wider transition-all">
                <FaAngleRight className="inline-block mr-2" />Eventos
              </Link>
              <Link href="/blog" className="mb-2.5 text-white hover:text-primary hover:tracking-wider transition-all">
                <FaAngleRight className="inline-block mr-2" />Blog
              </Link>
              <Link href="/volunteer" className="mb-2.5 text-white hover:text-primary hover:tracking-wider transition-all">
                <FaAngleRight className="inline-block mr-2" />Voluntariado
              </Link>
              <Link href="/donate" className="mb-2.5 text-white hover:text-primary hover:tracking-wider transition-all">
                <FaAngleRight className="inline-block mr-2" />Doações
              </Link>
              <Link href="/contact" className="mb-2.5 text-white hover:text-primary hover:tracking-wider transition-all">
                <FaAngleRight className="inline-block mr-2" />Contato
              </Link>
            </div>
          </div>

          {/* Footer Posts */}
          <div className="mb-[45px]">
            <h2 className="mb-[30px] text-xl font-bold text-primary">Posts Populares</h2>
            <div className="flex mb-5">
              <Image src="/img/blog-1.jpg" alt="Post Popular" width={80} height={80} className="w-[80px] h-auto" />
              <div className="pl-4">
                <Link href="/blog" className="block text-white hover:text-primary text-base font-semibold">
                  Como pequenas doações transformam vidas
                </Link>
                <div className="flex mt-2">
                  <p className="m-0 text-sm text-white">
                    <small>Por </small>
                    <Link href="#" className="text-white hover:text-primary">Admin</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <Image src="/img/blog-2.jpg" alt="Post Popular" width={80} height={80} className="w-[80px] h-auto" />
              <div className="pl-4">
                <Link href="/blog" className="block text-white hover:text-primary text-base font-semibold">
                  O papel da educação no combate à pobreza
                </Link>
                <div className="flex mt-2">
                  <p className="m-0 text-sm text-white">
                    <small>Por </small>
                    <Link href="#" className="text-white hover:text-primary">Admin</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Newsletter */}
          <div className="mb-[45px]">
            <h2 className="mb-[30px] text-xl font-bold text-primary">Newsletter</h2>
            <p className="text-white mb-6">
              Inscreva-se para receber notícias e atualizações sobre nossos projetos e campanhas.
            </p>
            <form>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Seu Email" 
                  className="w-full h-[60px] px-4 border-none focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full h-[60px] px-4 text-white bg-primary hover:bg-white hover:text-primary transition-all border-2 border-primary"
                >
                  Inscrever
                </button>
              </div>
              <div>
                <label className="text-gray-500 text-sm">
                  <input type="checkbox" className="mr-2" />
                  Aceito receber emails de newsletter
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-[30px]">
        <div className="container mx-auto">
          <div className="py-6 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="m-0 text-gray-400">
                  &copy; {currentYear} <Link href="/" className="text-white hover:text-primary">Caridade</Link>. Todos os Direitos Reservados.
                </p>
              </div>
              <div className="md:text-right">
                <p className="m-0 text-gray-400">
                  Desenvolvido por <Link href="#" className="text-white hover:text-primary">Dev Team</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;