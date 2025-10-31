function Projects() {
  try {
    const projects = [
      {
        title: 'Customer Churn Prediction',
        description: 'Built ML model to predict customer churn with 92% accuracy using ensemble methods',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        tags: ['Python', 'Scikit-learn', 'Classification'],
        icon: 'users'
      },
      {
        title: 'Sales Forecasting Dashboard',
        description: 'Interactive dashboard for real-time sales analytics and forecasting using time series models',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
        tags: ['Tableau', 'Python', 'Time Series'],
        icon: 'trending-up'
      },
      {
        title: 'Sentiment Analysis System',
        description: 'NLP-based sentiment analysis for social media data with 88% accuracy',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
        tags: ['NLP', 'Deep Learning', 'PyTorch'],
        icon: 'message-square'
      },
      {
        title: 'Recommendation Engine',
        description: 'Collaborative filtering system for personalized product recommendations',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80',
        tags: ['Matrix Factorization', 'Python', 'ML'],
        icon: 'star'
      }
    ];

    return (
      <section 
        id="projects" 
        className="py-20 bg-white"
        data-name="projects" 
        data-file="components/Projects.js"
      >
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="card">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-100">
                    <div className={`icon-${project.icon} text-lg text-[var(--primary-color)]`}></div>
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 text-[var(--primary-color)] rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}