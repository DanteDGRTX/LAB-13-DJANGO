const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api').replace(/\/$/, '');

async function getJson(path) {
  const response = await fetch(`${API_BASE_URL}/${path}`);
  if (!response.ok) throw new Error(`El servidor respondió ${response.status}.`);
  return response.json();
}

export const getCategorias = () => getJson('categorias/');
export const getProductos = () => getJson('productos/');
