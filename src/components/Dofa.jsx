// src/components/Dofa.jsx
import { dofaData } from '../data/dofaData';

const Dofa = () => {
  return (
    <section id="diagnosis" className="bg-gray-900 text-gray-200">
      <h2 className="text-2xl mb-6 text-orange-500 border-b-2 border-orange-500 pb-2">
        Diagnóstico Actual (DOFA)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dofaData.map((category) => (
          <article
            key={category.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-white">{category.type}</h3>
            <ul className="list-disc pl-6 text-gray-400">
              {category.items.map((item) => (
                <li key={item.id} className="mb-2">
                  {item.description}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Dofa;

