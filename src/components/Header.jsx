// src/components/Header.jsx
const Header = () => {
    return (
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">WEL-TUB Nightlife Experience</h1>
          <p className="text-lg mb-4">Contact us for special promotions and events!</p>
          <nav>
            <ul className="flex justify-center space-x-8 text-lg">
              <li>
                <a href="#introduction" className="hover:text-blue-300 transition-colors duration-300">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#diagnosis" className="hover:text-blue-300 transition-colors duration-300">
                  Diagnosis
                </a>
              </li>
              <li>
                <a href="#identity" className="hover:text-blue-300 transition-colors duration-300">
                  Identity
                </a>
              </li>
              <li>
                <a href="#objectives" className="hover:text-blue-300 transition-colors duration-300">
                  Objectives
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  