import './Body.css'

function Body() {
  return (
    <section id="top" className="hero section-pad">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            <p className="eyebrow mb-3">[ 01 ] — librería de componentes</p>
            <h1 className="hero-title mb-4">
              Un framework <span className="text-accent">para el desarrollo frontend</span>
            </h1>
            <p className="hero-sub mb-2">
              Para crear interfaces modernas e interactivas
            </p>
            <p className="hero-sub mb-4">
              con distintos efectos visuales, sin escribir CSS desde cero.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#tarjetas" className="btn btn-cta-lg">
                Ver componentes
              </a>
              <a href="#barra" className="btn btn-outline-line">
                Cómo funciona
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-card">
              <div className="hero-card-dots">
                <span /> <span /> <span />
              </div>
              <pre className="hero-code">
{`<div class="card">
  <div class="card-body">
    <h5>Bootstrap</h5>
    <p>Listo para usar.</p>
  </div>
</div>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Body
