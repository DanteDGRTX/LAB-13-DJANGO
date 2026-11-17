export default function Header() {
  return (
    <header className="site-header" id="inicio">
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="SHOPY-DG, inicio"><span className="brand-mark">S</span><span>SHOPY<span className="brand-accent">-DG</span><small>TECNOLOGÍA PARA TODOS</small></span></a>
        <nav className="main-nav" aria-label="Navegación principal"><a href="#inicio">Inicio</a><a href="#catalogo">Catálogo</a><a href="#contacto">Contacto</a></nav>
      </div>
    </header>
  );
}
