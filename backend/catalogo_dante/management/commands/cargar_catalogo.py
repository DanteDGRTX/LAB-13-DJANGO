from django.core.management.base import BaseCommand
from catalogo_dante.models import Categoria, Producto


class Command(BaseCommand):
    help = 'Carga categorías y productos de demostración de SHOPY-DG.'

    def handle(self, *args, **options):
        laptops, _ = Categoria.objects.get_or_create(nombre='Laptops', defaults={'descripcion': 'Equipos portátiles para trabajo y estudio.'})
        accesorios, _ = Categoria.objects.get_or_create(nombre='Accesorios', defaults={'descripcion': 'Periféricos y complementos tecnológicos.'})
        products = [
            ('Laptop Pro X', 'Equipo portátil de alto rendimiento con 16 GB de RAM y SSD.', '4500.00', 8, laptops, 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=85'),
            ('Mouse Inalámbrico', 'Mouse ergonómico de alta precisión con batería recargable.', '120.00', 25, accesorios, 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=85'),
            ('Laptop Ultraligera', 'Portátil compacto para movilidad y productividad diaria.', '3299.00', 5, laptops, 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=85'),
            ('Teclado Mecánico', 'Teclado compacto con interruptores táctiles y conexión USB.', '249.00', 14, accesorios, 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=85'),
        ]
        for nombre, descripcion, precio, stock, categoria, imagen in products:
            Producto.objects.update_or_create(nombre=nombre, defaults={'descripcion': descripcion, 'precio': precio, 'stock': stock, 'categoria': categoria, 'imagen': imagen})
        self.stdout.write(self.style.SUCCESS('Catálogo de ejemplo listo.'))
