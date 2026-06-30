import './Imagenes.css'

const imagenes = [
  {
    id: '16',
    label: 'Layouts con grid',
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    alt: 'Código de un layout responsivo en pantalla',
  },
  {
    id: '17',
    label: 'Componentes UI',
    src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    alt: 'Interfaz de usuario con componentes UI en una pantalla',
  },
  {
    id: '18',
    label: 'Temas personalizados',
    src: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80',
    alt: 'Paleta de colores y diseño visual en una laptop',
  },
]

function Imagenes() {
  return (
    <section id="imagenes" className="imagenes-section section-pad">
      <div className="container">
        <p className="eyebrow mb-2">[ 03 ] — imágenes</p>
        <h2 className="section-title mb-4">Resultados que se ven bien</h2>

        <div className="row g-4">
          {imagenes.map((img) => (
            <div className="col-md-4" key={img.id}>
              <figure className="imagen-card">
                <img src={img.src} alt={img.alt} loading="lazy" />
                <span className="imagen-index">{img.id}</span>
                <figcaption>{img.label}</figcaption>
              </figure>
            </div>
          ))}
        </div>

        <p className="imagenes-caption mt-4">
          Los sitios web que usan los desarrolladores frontend para construir proyectos rápidos y consistentes.
        </p>
      </div>
    </section>
  )
}

export default Imagenes
