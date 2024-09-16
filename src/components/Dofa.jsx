// src/components/Dofa.jsx
import { dofaData } from '../data/dofaData';

const Dofa = () => {
  return (
    <section id="dofa" className="my-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Diagnóstico Actual (DOFA)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {dofaData.map((category) => (
            <article
              key={category.id}
              className="border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category.type}</h3>
              <ul className="list-disc list-inside text-left text-lg text-gray-700 space-y-2">
                {category.items.map((item) => (
                  <li key={item.id} className="pl-4">
                    {item.description}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dofa;
