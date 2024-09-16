// src/components/ObjectivesTable.jsx
const objectivesData = [
    { id: 1, goal: "Increase event attendance by 20%", target: 500, progress: 250, compliance: 50 },
    { id: 2, goal: "Generate $1 million in VIP services", target: 1000000, progress: 50000, compliance: 5 },
    { id: 3, goal: "Expand social media engagement", target: 1000, progress: 900, compliance: 90 },
    { id: 4, goal: "Achieve full occupancy", target: 150000, progress: 150000, compliance: 100 },
    { id: 5, goal: "Increase revenue from events", target: 200000, progress: 100000, compliance: 50 },
  ];
  
  const getStatusClass = (compliance) => {
    if (compliance <= 35) return "text-red-500";
    if (compliance <= 75) return "text-orange-500";
    return "text-green-500";
  };
  
  const ObjectivesTable = () => {
    return (
      <section id="objectives" className="my-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Objetivos Estratégicos</h2>
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Código</th>
                <th className="px-4 py-2">Objetivo</th>
                <th className="px-4 py-2">Meta</th>
                <th className="px-4 py-2">Avance</th>
                <th className="px-4 py-2">Cumplimiento</th>
                <th className="px-4 py-2">Estado</th>
              </tr>
            </thead>
            <tbody>
              {objectivesData.map((obj) => (
                <tr key={obj.id} className="text-center">
                  <td className="border px-4 py-2">{obj.id}</td>
                  <td className="border px-4 py-2">{obj.goal}</td>
                  <td className="border px-4 py-2">${obj.target.toLocaleString()}</td>
                  <td className="border px-4 py-2">${obj.progress.toLocaleString()}</td>
                  <td className="border px-4 py-2">{obj.compliance}%</td>
                  <td className={`border px-4 py-2 ${getStatusClass(obj.compliance)}`}>
                    {obj.compliance <= 35 ? "Crítico" : obj.compliance <= 75 ? "Aceptable" : "Exitoso"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  };
  
  export default ObjectivesTable;
  