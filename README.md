# Laboratorio 13: tienda SHOPY-DG

Aplicación inicial de comercio electrónico con React, Vite, Tailwind CSS, componentes visuales inspirados en shadcn/ui, Django y Django REST Framework.

Repositorio público: https://github.com/DanteDGRTX/LAB-13-DJANGO

Informe del laboratorio: [docs/GLAB-S13-JMIRANDA-2026-02_FINAL.docx](docs/GLAB-S13-JMIRANDA-2026-02_FINAL.docx)

## Estructura
- `frontend/`: interfaz React, componentes reutilizables, filtro de categorías y servicio HTTP.
- `backend/`: proyecto Django, aplicación de catálogo, modelos, API REST y administración.
- `docs/`: informe del laboratorio y capturas.

## Inicio rápido en Windows
1. Crear y activar un entorno virtual; instalar `backend/requirements.txt`.
2. Desde `backend/`, ejecutar `python manage.py migrate` y `python manage.py cargar_catalogo`.
3. Iniciar el servicio con `python manage.py runserver`.
4. En otra terminal, abrir `frontend/`, ejecutar `npm install` y `npm run dev`.
5. Visitar `http://localhost:5173`. El servicio REST usa `http://127.0.0.1:8000/api` por defecto.

Para cambiar el endpoint de API, copia `frontend/.env.example` a `frontend/.env.local` y define `VITE_API_BASE_URL`.

## API del catálogo
- `GET /api/categorias/`
- `GET /api/productos/`

Los modelos `Categoria` y `Producto` se gestionan desde `/admin/`. Para crear una cuenta administrativa: `python manage.py createsuperuser`.

## Nota de alcance
El laboratorio entrega la estructura del catálogo y su integración REST. No incluye pagos, pedidos ni autenticación de clientes, según el alcance de la guía. SQLite y la clave de desarrollo son solo para ejecución local; configurar variables seguras antes de desplegar.


