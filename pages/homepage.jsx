import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white text-gray-800 rounded-2xl shadow-xl p-6">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-blue-600">Welcome to My Website</h1>
          <p className="text-lg text-gray-600">Your one-stop destination for amazing content!</p>
        </header>
        
        <nav className="mb-6">
          <ul className="flex justify-center space-x-6 text-lg font-medium">
            <li><a href="#" className="text-blue-500 hover:text-blue-700">Home</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-700">About</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-700">Services</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-700">Contact</a></li>
          </ul>
        </nav>
        
        <main className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">About Us</h2>
          <p className="text-gray-600 mt-2">This is a simple homepage built using React and Tailwind CSS.</p>
          <Link to="/login" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">Login</Link>
        </main>
        
        <footer className="text-center text-gray-500 text-sm mt-6">
          <p>&copy; 2025 My Website. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
