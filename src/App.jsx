import { useState } from 'react'
import './App.css'

import Header from './components/Header';
import Dofa from './components/Dofa';
import ObjectivesTable from './components/ObjectivesTable';
import OrganizationalIdentity from './components/OrganizationalIdentity';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-900">
        <Header />
        <main className="p-4">
          <section id="introduction" className="my-8">
            <h2 className="text-2xl text-orange-500 mb-6 border-b-2 border-orange-500 pb-2">Introducción</h2>
            <p className="text-gray-300 leading-relaxed text-justify">
                Bienvenidos a WEL-TUB: La Revolución en la Vida Nocturna
                En WEL-TUB, nuestra misión es crear una experiencia nocturna que va más allá de lo común, ofreciendo eventos únicos y un ambiente inigualable. Nos destacamos por nuestra capacidad de combinar entretenimiento, música y un servicio excepcional para garantizar que cada visita sea inolvidable.

                A través de nuestro Diagnóstico DOFA, hemos identificado nuestras fortalezas, como nuestro ambiente único y nuestra variedad de eventos, pero también reconocemos desafíos y oportunidades de crecimiento, como la expansión de tipos de eventos y la mejora en la interacción con nuestras audiencias en redes sociales. Con una visión clara de convertirnos en el destino líder en la vida nocturna, tanto a nivel nacional como internacional, estamos comprometidos a superar las expectativas de nuestros clientes con innovación constante y excelencia.
                
                Nuestra prioridad es siempre la seguridad, la inclusión y la satisfacción de nuestros visitantes. Ya sea que busques un espacio vibrante para disfrutar de la mejor música o desees vivir una experiencia VIP personalizada, en WEL-TUB nos esforzamos por brindar lo mejor de la vida nocturna.
            </p>
          </section>
          <Dofa />
          <OrganizationalIdentity />
          <ObjectivesTable />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
