import Header from './components/Header';
import Dofa from './components/Dofa';
import ObjectivesTable from './components/ObjectivesTable';
import OrganizationalIdentity from './components/OrganizationalIdentity';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <section id="introduction" className="bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Introducción</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            ¡Bienvenido a <span className="font-bold">WEL-TUB</span>, el lugar donde la vida nocturna cobra vida! En <span className="font-bold">WEL-TUB</span>, nos especializamos en crear experiencias nocturnas inolvidables, ofreciendo una mezcla vibrante de entretenimiento, excelente música y eventos únicos diseñados para cada ocasión.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ya sea que estés buscando una fiesta temática retro, un evento de DJ de renombre o una noche tranquila disfrutando de cócteles exóticos, en <span className="font-bold">WEL-TUB</span> tenemos algo para todos. Nuestra misión es hacer que cada noche sea especial y crear recuerdos que duren toda la vida. ¡Descubre la magia de la noche con nosotros!
          </p>
        </section>
        <Dofa />
        <OrganizationalIdentity />
        <ObjectivesTable />
      </main>
      <Footer />
    </div>
  );
}

export default App;
