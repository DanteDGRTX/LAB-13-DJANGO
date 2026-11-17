export default function ProductCard({ producto }) {
  const disponible = Number(producto.stock) > 0;
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={producto.imagen} alt={producto.nombre} loading="lazy" onError={(event) => { event.currentTarget.src = 'https://placehold.co/800x560/e2e8f0/475569?text=SHOPY-DG'; }} />
        <span className="product-category">{producto.categoria_nombre || producto.categoria}</span>
      </div>
      <div className="product-content"><h3>{producto.nombre}</h3><p>{producto.descripcion}</p>
        <div className="product-meta"><div><span className="meta-label">Precio</span><strong className="product-price">S/ {Number(producto.precio).toFixed(2)}</strong></div><span className={`stock-badge ${disponible ? 'in-stock' : 'out-stock'}`}>{disponible ? `${producto.stock} disponibles` : 'Agotado'}</span></div>
      </div>
    </article>
  );
}
