import './Carrusel.css'

const slides = [
  {
    id: '12',
    title: 'Layouts con Grid',
    text: 'Bootstrap divide la pantalla en 12 columnas responsivas que se adaptan a cualquier dispositivo.',
    src: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80',
    alt: 'Diseño web moderno con múltiples columnas en pantalla',
  },
  {
    id: '13',
    title: 'Componentes listos',
    text: 'Botones, modales, alertas y formularios ya diseñados. Solo aplica la clase y listo.',
    src: 'https://plus.unsplash.com/premium_vector-1734528979745-eaa10d557eed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Componentes de interfaz de usuario en un editor de código',
  },
  {
    id: '14',
    title: 'Totalmente responsivo',
    text: 'Cada componente se ajusta automáticamente de escritorio a móvil sin escribir media queries.',
    src: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=80',
    alt: 'Dispositivos múltiples mostrando un sitio web responsivo',
  },
  {
    id: '15',
    title: 'Temas y personalización',
    text: 'Variables Sass y utilidades CSS permiten cambiar colores, fuentes y espaciado con una línea.',
    src: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&w=1200&q=80',
    alt: 'Paleta de colores y código de estilos en pantalla',
  },
]

function Carrusel() {
  return (
    <section className="carrusel-section section-pad">
      <div className="container">
        <p className="eyebrow mb-2">[ 02 ] — carrusel</p>
        <h2 className="section-title mb-4">Contenido que se mueve solo</h2>

        <div
          id="bsCarousel"
          className="carousel slide carrusel-shell"
          data-bs-ride="carousel"
          data-bs-interval="3500"
        >
          <div className="carousel-indicators">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                data-bs-target="#bsCarousel"
                data-bs-slide-to={i}
                className={i === 0 ? 'active' : ''}
                aria-current={i === 0 ? 'true' : undefined}
                aria-label={`Diapositiva ${i + 1}`}
              />
            ))}
          </div>

          <div className="carousel-inner">
            {slides.map((s, i) => (
              <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={s.id}>
                <div className="carrusel-slide">
                  <img src={s.src} alt={s.alt} className="carrusel-img" loading="lazy" />
                  <div className="carrusel-overlay" />
                  <div className="carrusel-content">
                    <span className="carrusel-index">{s.id}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#bsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#bsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Carrusel
