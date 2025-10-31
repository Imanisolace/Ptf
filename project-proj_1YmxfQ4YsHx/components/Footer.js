function Footer() {
  try {
    return (
      <footer 
        className="bg-gray-900 text-white py-8"
        data-name="footer" 
        data-file="components/Footer.js"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Data Science Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}