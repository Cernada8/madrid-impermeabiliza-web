
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
    image: './lovable-uploads/91e92983-6259-4242-8242-aa587955a87e.png'
  },
  {
    id: 2,
    category: 'tejados',
    title: 'Rehabilitación de cubierta en Madrid centro',
    description: 'Tratamiento integral con tela asfáltica de alta durabilidad',
    image: './lovable-uploads/cd493812-9832-4b2c-b50c-232872ae8e1d.png'
  },
  {
    id: 3,
    category: 'terrazas',
    title: 'Impermeabilización de terraza en Getafe',
    description: 'Sistema especializado con acabado transitable',
    image: './lovable-uploads/b003b0b7-704a-4e70-8138-fe61dcbcc04c.png'
  },
  {
    id: 4,
    category: 'industriales',
    title: 'Proyecto industrial en Móstoles',
    description: 'Impermeabilización de cubierta industrial de gran superficie',
    image: './lovable-uploads/5c07b49e-a86e-400a-9276-f33eba406bb3.png'
  },
  {
    id: 5,
    category: 'terrazas',
    title: 'Tratamiento de terraza en Alcorcón',
    description: 'Solución integral con sistema multicapa',
    image: './lovable-uploads/ccd04247-039a-4139-b6cb-92be74cfc4fa.png'
  },
  {
    id: 6,
    category: 'industriales',
    title: 'Complejo empresarial en Leganés',
    description: 'Impermeabilización de edificio comercial',
    image: './lovable-uploads/8706737a-c7e2-45a3-a60d-4b506ae91d41.png'
  },
  {
    id: 7,
    category: 'tejados',
    title: 'Rehabilitación de cubierta residencial',
    description: 'Instalación de nueva membrana impermeabilizante',
    image: './lovable-uploads/95a8f506-3245-4c90-b7be-84f1e0b821bc.png'
  },
  {
    id: 8,
    category: 'terrazas',
    title: 'Terraza comunitaria en Madrid',
    description: 'Renovación con sistema antifiltración',
    image: './lovable-uploads/3637daa5-03aa-40d6-8b4b-d2d1fee62407.png'
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
