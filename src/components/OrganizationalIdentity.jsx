// src/components/OrganizationalIdentity.jsx
const OrganizationalIdentity = () => {
    return (
        <section id="identity" className="my-8">
            <h2 className="text-2xl text-orange-500 mb-6 border-b-2 border-orange-500 pb-2">Identidad Organizacional</h2>
            <dl className="space-y-4">
                <div>
                    <dt className="text-lg font-bold text-gray-100">Misión</dt>
                    <dd className="text-gray-300 text-justify">
                        Nuestra misión es proporcionar una experiencia nocturna de primer nivel que trascienda lo común, combinando de manera única el entretenimiento, la música y un servicio al cliente excepcional. Nos esforzamos por crear momentos memorables para cada visitante, brindando un ambiente inclusivo y vibrante donde la diversión, la seguridad y la calidad de servicio son nuestras principales prioridades. A través de una oferta variada de eventos y experiencias personalizadas, buscamos que cada persona que nos visite se sienta parte de una comunidad dinámica y emocionante.
                    </dd>
                </div>

                <div>
                    <dt className="text-lg font-bold text-gray-100">Visión</dt>
                    <dd className="text-gray-300 text-justify">
                        Nuestra visión es convertirnos en el destino líder en la vida nocturna a nivel nacional e internacional, reconocidos por la innovación y la excelencia en la creación de experiencias. Nos proyectamos como un espacio de referencia para quienes buscan eventos originales y de alta calidad, donde la música, el entretenimiento y el ambiente se unen para crear vivencias incomparables. A través de nuestra evolución constante, buscamos posicionarnos como un referente en la industria del entretenimiento nocturno, siendo reconocidos por nuestra capacidad para marcar tendencia y superar las expectativas de nuestros clientes.
                    </dd>
                </div>

                <div>
                    <dt className="text-lg font-bold text-gray-100 ">Políticas</dt>
                    <dd className="text-gray-300 text-justify">
                        En todas nuestras operaciones y eventos, priorizamos la seguridad de nuestros clientes y empleados, asegurando que cada experiencia se desarrolle en un entorno controlado y de confianza. Promovemos un ambiente inclusivo, donde todas las personas, independientemente de su origen, género o preferencias, sean bienvenidas y tratadas con respeto. Además, estamos comprometidos con la satisfacción del cliente, ofreciendo un servicio de alta calidad que busca exceder las expectativas en cada interacción. Implementamos prácticas sostenibles y éticas, asegurándonos de que nuestra operación sea responsable tanto a nivel social como ambiental.
                    </dd>
                </div>
            </dl>
        </section>
    );
};

export default OrganizationalIdentity;
