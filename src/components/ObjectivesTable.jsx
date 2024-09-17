// src/components/ObjectivesTable.jsx
const objectivesData = [
    { id: 1, goal: "Aumentar la asistencia a eventos en un 20 %", target: 500, progress: 250, compliance: 50 },
    { id: 2, goal: "Generar $1 millón en servicios VIP", target: 1000000, progress: 50000, compliance: 5 },
    { id: 3, goal: "Ampliar la participación en redes sociales", target: 1000, progress: 900, compliance: 90 },
    { id: 4, goal: "Lograr una ocupación total", target: 150000, progress: 150000, compliance: 100 },
    { id: 5, goal: "Aumentar los ingresos de los eventos", target: 200000, progress: 100000, compliance: 50 },
];

const getStatusClass = (compliance) => {
    if (compliance <= 35) return "text-red-500";
    if (compliance <= 75) return "text-orange-500";
    return "text-green-500";
};

const ObjectivesTable = () => {
    return (
        <section id="objectives" className="my-8">
            <h2 className="text-2xl mb-6 text-orange-500 border-b-2 border-orange-500 pb-2">Objetivos Estratégicos</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse shadow-lg">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="text-left text-orange-500 p-4 border-b border-gray-700">Código</th>
                            <th className="text-left text-orange-500 p-4 border-b border-gray-700">Objetivo</th>
                            <th className="text-left text-orange-500 p-4 border-b border-gray-700">Meta</th>
                            <th className="text-left text-orange-500 p-4 border-b border-gray-700">Avance</th>
                            <th className="text-left text-orange-500 p-4 border-b border-gray-700">Cumplimiento</th>
                            <th className="text-left text-orange-500 p-4 border-b border-gray-700">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-900">
                        {objectivesData.map((obj) => (
                            <tr key={obj.id} className="border-b border-gray-700 hover:bg-gray-800">
                                <td className="p-4 text-gray-300">{obj.id}</td>
                                <td className="p-4 text-gray-300">{obj.goal}</td>
                                <td className="p-4 text-gray-300">${obj.target.toLocaleString()}</td>
                                <td className="p-4 text-gray-300">${obj.progress.toLocaleString()}</td>
                                <td className="p-4 text-gray-300">{obj.compliance}%</td>
                                <td className={`p-4 font-bold ${getStatusClass(obj.compliance)}`}>
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
