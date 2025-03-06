export default function SignInPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign In</h2>
          
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 mb-4"
          />
          
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 mb-6"
          />
          
          <button className="w-full bg-pink-500 text-white p-3 rounded-lg shadow-lg hover:bg-pink-600 transition">
            Sign In
          </button>
        </div>
      </div>
    );
  }
  