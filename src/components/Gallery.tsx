import React, { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const projectCategories = [
  { id: 'all', name: 'Todos los trabajos' },
  { id: 'tejados', name: 'Impermeabilización de Tejados' },
  { id: 'terrazas', name: 'Sellado de Terrazas' },
  { id: 'industriales', name: 'Proyectos Industriales' },
];

const projectImages = [
  {
    id: 1,
    category: 'terrazas',
    title: 'Impermeabilización de terraza comunitaria en Leganés',
    description: 'Renovación completa con sistema de doble capa',
    image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    category: 'tejados',
    title: 'Rehabilitación de cubierta en Madrid centro',
    description: 'Tratamiento integral con tela asfáltica de alta durabilidad',
    image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    category: 'terrazas',
    title: 'Impermeabilización de terraza en Getafe',
    description: 'Sistema especializado con acabado transitable',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    category: 'industriales',
    title: 'Proyecto industrial en Móstoles',
    description: 'Impermeabilización de cubierta industrial de gran superficie',
    image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    category: 'terrazas',
    title: 'Tratamiento de terraza en Alcorcón',
    description: 'Solución integral con sistema multicapa',
    image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    category: 'industriales',
    title: 'Complejo empresarial en Leganés',
    description: 'Impermeabilización de edificio comercial',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    category: 'tejados',
    title: 'Rehabilitación de cubierta residencial',
    description: 'Instalación de nueva membrana impermeabilizante',
    image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    category: 'terrazas',
    title: 'Terraza comunitaria en Madrid',
    description: 'Renovación con sistema antifiltración',
    image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projectImages 
    : projectImages.filter(project => project.category === activeCategory);

  return (
    <section id="trabajos" className="section-padding bg-slate-50">
      <div className="container-padding mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Nuestros Trabajos Realizados
          </h2>
          <p className="text-slate-600">
            Descubre algunos de nuestros proyectos de impermeabilización completados
            con éxito en Madrid y alrededores.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {projectCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <AspectRatio ratio={4/3}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full" asChild>
            <a href="#contacto">
              Solicita presupuesto para tu proyecto
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
