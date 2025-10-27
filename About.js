function About() {
  try {
    return (
      <section 
        id="about" 
        className="py-20 bg-white"
        data-name="about" 
        data-file="components/About.js"
      >
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                  alt="Data Analytics" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Passionate About Data-Driven Solutions</h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  I'm a data scientist with expertise in extracting meaningful insights from complex datasets. 
                  My approach combines statistical rigor with creative problem-solving to deliver impactful solutions.
                </p>
                <p className="text-[var(--text-secondary)] mb-6">
                  With experience in predictive modeling, data visualization, and statistical analysis, 
                  I help organizations make informed decisions based on data-driven evidence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100">
                      <div className="icon-chart-bar text-xl text-[var(--primary-color)]"></div>
                    </div>
                    <span className="font-semibold">Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-purple-100">
                      <div className="icon-brain text-xl text-purple-600"></div>
                    </div>
                    <span className="font-semibold">ML Models</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-100">
                      <div className="icon-database text-xl text-green-600"></div>
                    </div>
                    <span className="font-semibold">Big Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}