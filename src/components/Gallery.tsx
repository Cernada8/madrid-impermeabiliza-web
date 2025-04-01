
import React, { useState } from 'react';

const projectCategories = [
  { id: 'all', name: 'Todos' },
  { id: 'tejados', name: 'Tejados' },
  { id: 'terrazas', name: 'Terrazas' },
  { id: 'fachadas', name: 'Fachadas' },
  { id: 'sotanos', name: 'Sótanos' }
];

const projectImages = [
  {
    id: 1, 
    category: 'tejados',
    title: 'Impermeabilización de cubierta en Leganés',
    before: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2, 
    category: 'terrazas',
    title: 'Sellado de terraza en Getafe',
    before: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3, 
    category: 'fachadas',
    title: 'Tratamiento de fachada en Madrid Centro',
    before: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4, 
    category: 'sotanos',
    title: 'Impermeabilización de sótano en Móstoles',
    before: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5, 
    category: 'tejados',
    title: 'Reparación de tejado en Alcorcón',
    before: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6, 
    category: 'terrazas',
    title: 'Recuperación de terraza en Leganés',
    before: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80&w=800',
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projectImages 
    : projectImages.filter(project => project.category === activeCategory);

  return (
    <section id="trabajos" className="section-padding bg-slate-50">
      <div className="container-padding mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Nuestros Trabajos Realizados
          </h2>
          <p className="text-slate-600">
            Descubre algunos de nuestros proyectos de impermeabilización completados
            con éxito en Madrid y alrededores.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white hover:bg-slate-100 text-slate-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative group"
              onMouseEnter={() => setHoveredItem(project.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-64">
                <img
                  src={hoveredItem === project.id ? project.after : project.before}
                  alt={project.title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm font-medium uppercase tracking-wider">
                      {project.category === 'tejados' ? 'Tejados' : 
                       project.category === 'terrazas' ? 'Terrazas' :
                       project.category === 'fachadas' ? 'Fachadas' : 'Sótanos'}
                    </p>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-slate-500">
                    {hoveredItem === project.id ? 'Después' : 'Antes'}
                  </div>
                  <div className="text-blue-600 text-sm font-medium">
                    Pasa el cursor para ver el {hoveredItem === project.id ? 'antes' : 'después'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contacto" className="btn-primary inline-block">
            Solicita un presupuesto para tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
