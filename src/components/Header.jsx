// src/components/Header.jsx
const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-6 text-center shadow-lg">
            <h1 className="text-orange-500 text-5xl tracking-wider font-bold">
                WEL-TUB Nightlife Experience
            </h1>
            <p className="text-gray-400 mt-2">
                Contact us for special promotions and events!
            </p>
            <nav className="mt-4">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <a
                            href="#introduction"
                            className="text-orange-500 font-bold hover:text-white hover:shadow-md transition-colors duration-300"
                        >
                            Introduccion
                        </a>
                    </li>
                    <li>
                        <a
                            href="#diagnosis"
                            className="text-orange-500 font-bold hover:text-white hover:shadow-md transition-colors duration-300"
                        >
                            Diagnostico
                        </a>
                    </li>
                    <li>
                        <a
                            href="#identity"
                            className="text-orange-500 font-bold hover:text-white hover:shadow-md transition-colors duration-300"
                        >
                            Identidad
                        </a>
                    </li>
                    <li>
                        <a
                            href="#objectives"
                            className="text-orange-500 font-bold hover:text-white hover:shadow-md transition-colors duration-300"
                        >
                            Objetivos
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
