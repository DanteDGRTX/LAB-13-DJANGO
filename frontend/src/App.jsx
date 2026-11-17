import { useEffect, useMemo, useState } from 'react';
import { getCategorias, getProductos } from './services/catalogo';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';

export default function App() {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [filtroActual, setFiltroActual] = useState('Todas');
  const [estado, setEstado] = useState('cargando');
  const [error, setError] = useState('');

  useEffect(() => {
    let activo = true;
    Promise.all([getCategorias(), getProductos()])
      .then(([cats, prods]) => {
        if (!activo) return;
        setCategorias(cats);
        setProductos(prods);
        setEstado('listo');
      })
      .catch((err) => {
        if (!activo) return;
        setError(`${err.message} Comprueba que Django esté activo.`);
        setEstado('error');
      });
    return () => { activo = false; };
  }, []);

  const productosFiltrados = useMemo(() => filtroActual === 'Todas' ? productos : productos.filter((producto) => producto.categoria_nombre === filtroActual), [productos, filtroActual]);

  return (
    <div className="app-shell">
      <Header />
      <main id="catalogo" className="catalog-main">
        <section className="catalog-intro"><span className="eyebrow">TECNOLOGÍA SELECCIONADA</span><h1>Encuentra tu próximo <span>favorito.</span></h1><p>Equipos y accesorios para estudiar, trabajar y crear.</p></section>
        <div className="catalog-toolbar"><div><h2>Catálogo</h2><p>{estado === 'listo' ? `${productosFiltrados.length} productos disponibles` : 'Conectando con el catálogo…'}</p></div><CategoryFilter categorias={categorias} filtroActual={filtroActual} setFiltro={setFiltroActual} /></div>
        {estado === 'cargando' && <div className="notice" role="status">Cargando productos desde Django REST Framework…</div>}
        {estado === 'error' && <div className="notice notice-error" role="alert">{error}</div>}
        {estado === 'listo' && productosFiltrados.length > 0 && <div className="product-grid">{productosFiltrados.map((producto) => <ProductCard key={producto.id} producto={producto} />)}</div>}
        {estado === 'listo' && productosFiltrados.length === 0 && <div className="notice">No hay productos en esta categoría.</div>}
      </main>
      <footer id="contacto" className="site-footer"><span className="footer-brand">SHOPY-DG</span><span>Catálogo digital · Desarrollado por Dante Gonzales</span><a href="mailto:contacto@shopy-dg.example">Contacto</a></footer>
    </div>
  );
}
