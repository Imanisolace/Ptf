function Hero() {
  try {
    return (
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-20"
        data-name="hero" 
        data-file="components/Hero.js"
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6">
              Data Science & <span className="gradient-text">Analytics</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Transforming complex data into actionable insights through advanced analytics, 
              machine learning, and visualization techniques.
            </p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} 
                className="btn-primary">
                View Projects
              </button>
              <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
                className="px-6 py-3 rounded-lg font-semibold border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}