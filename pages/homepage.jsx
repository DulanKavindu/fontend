import './homepage.css'
import { Link } from 'react-router-dom';
export default function HomePage() {
    return (
      <div className="container">
        <header>
          <h1>Welcome to My Website</h1>
          <p>Your one-stop destination for amazing content!</p>
        </header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <main>
          <h2>About Us</h2>
          <p>This is a simple homepage built using React and CSS.</p>
          <Link to="/login">login</Link>
        </main>
        <footer>
          <p>&copy; 2025 My Website. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  