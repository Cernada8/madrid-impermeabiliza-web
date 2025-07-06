
import React, { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
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
    title: 'Impermeabilización de terraza comunitaria',
    description: '',
    image: '/lovable-uploads/c13a337e-558b-46c8-b51a-659a69199f1e.png'
  },
  {
    id: 2,
    category: 'tejados',
    title: 'Rehabilitación de cubierta',
    description: '',
    image: '/lovable-uploads/6bf59fe9-c773-44c2-a4f9-c650ad0b71f4.png'
  },
  {
    id: 3,
    category: 'tejados',
    title: 'Impermeabilización de tejado',
    description: '',
    image: '/lovable-uploads/2a8d589d-f16c-4d78-a6d9-72d42068288c.png'
  },
  {
    id: 4,
    category: 'tejados',
    title: 'Proyecto de cubierta residencial',
    description: '',
    image: '/lovable-uploads/a2411277-fc89-4dd7-babc-0e514b4bbe4b.png'
  },
  {
    id: 5,
    category: 'tejados',
    title: 'Impermeabilización de cubierta',
    description: '',
    image: '/lovable-uploads/c9eadf29-b070-489a-af97-6fe744ff5b75.png'
  },
  {
    id: 6,
    category: 'industriales',
    title: 'Proyecto industrial',
    description: '',
    image: '/lovable-uploads/63dcf9e5-1c9c-4004-8b9c-033f831dd34f.png'
  },
  {
    id: 7,
    category: 'industriales',
    title: 'Impermeabilización industrial',
    description: '',
    image: '/lovable-uploads/2cebf49f-2b23-45b3-a7cf-efc55714b7e3.png'
  },
  {
    id: 8,
    category: 'tejados',
    title: 'Cubierta impermeabilizada',
    description: '',
    image: '/lovable-uploads/69b1818f-d47a-46e5-823c-69088cd3d424.png'
  },
  {
    id: 9,
    category: 'industriales',
    title: 'Proyecto de gran superficie',
    description: '',
    image: '/lovable-uploads/955a807a-c53d-4204-91db-688d017c5492.png'
  },
  {
    id: 10,
    category: 'industriales',
    title: 'Complejo empresarial',
    description: '',
    image: '/lovable-uploads/cd7990f7-ff64-4513-9bb0-cfb72512311e.png'
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
