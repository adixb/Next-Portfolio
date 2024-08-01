
import HeroSection from "../../components/HeroSection";
import ServiceSection from "../../components/ServiceSection";
import ProjectSection from "../../components/ProjectSection";
import ContactForm from '../../components/Contact' ; 
import Footer from '../../components/Footer' ; 
import ClientSection from '../../components/ClientSection';

export default function Home() {
  return (
    <main className=" min-h-screen overflow-x-hidden">
      <HeroSection/>
      <ServiceSection/>
      <ProjectSection/>
      <ClientSection/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}
