import React from "react";
import SectionHeading from "@/components/SectionHeading";

const EventsSection: React.FC = () => {
  return (
    <>
      <section className="md:pt-24 pt-16">
        <div className="xl:container mx-auto xl:px-0 lg:px-6 px-4 border-b-2 border-b-primary md:pb-24 pb-16">
          <div className="flex flex-wrap">
            <div className="w-full mb-10">
              <SectionHeading
                heading="forbes events"
                linkTitle="Foroforbes.com"
                linkPath="#"
              />
            </div>
            <div className="w-full max-h-[362px] mb-10">
              <img
                src="/img/forbes_events.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full">
              <p className="text-black text-sm">
                Bajo el compromiso de crear experiencias vivas que unan a las
                ideas y personas más influyentes del mundo, los eventos y
                conferencias Forbes trasladan a EXPERIENCIAS EN VIVO las páginas
                de nuestra edición impresa y las conversaciones de
                forbes.com.mx. <br /> <br /> <br className="md:block hidden" />{" "}
                Empresarios, CEOs, altos ejecutivos, funcionarios públicos,
                emprendedores, creativos y líderes de opinión se suman a nuestro
                expertise en el desarrollo de contenido y hospitalidad de
                primera clase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsSection;
