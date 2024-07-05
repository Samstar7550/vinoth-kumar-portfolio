import Hero from "../../components/Hero";
import { FloatingNav } from "../../components/ui/FloatingNav";
import Qualifications from "../../components/Qualifications";
import Experiences from "../../components/Experiences";
import MultiTab from "../../components/MultiTab";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/" },
            { name: "Qualifications", link: "/#qualification" },
            { name: "Experience", link: "/#experience" },
            { name: "Events", link: "/#events" },
          ]}
        />
        <Hero />
        <Qualifications />
        <Experiences />
        <MultiTab />
        <Footer />
      </div>
    </main>
  );
}
