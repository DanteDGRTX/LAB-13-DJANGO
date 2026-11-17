import { Button } from './ui/button';

export default function CategoryFilter({ categorias, filtroActual, setFiltro }) {
  return (
    <nav className="category-filter" aria-label="Filtrar por categoría">
      <Button size="sm" variant={filtroActual === 'Todas' ? 'default' : 'outline'} aria-pressed={filtroActual === 'Todas'} onClick={() => setFiltro('Todas')}>Todas</Button>
      {categorias.map((categoria) => {
        const nombre = typeof categoria === 'object' ? categoria.nombre : categoria;
        return <Button key={typeof categoria === 'object' ? categoria.id : nombre} size="sm" variant={filtroActual === nombre ? 'default' : 'outline'} aria-pressed={filtroActual === nombre} onClick={() => setFiltro(nombre)}>{nombre}</Button>;
      })}
    </nav>
  );
}
