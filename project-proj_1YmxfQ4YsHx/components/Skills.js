function Skills() {
  try {
    const skillCategories = [
      {
        title: 'Programming Languages',
        icon: 'code',
        color: 'blue',
        skills: ['Python', 'R', 'SQL', 'JavaScript']
      },
      {
        title: 'Data Analysis',
        icon: 'chart-line',
        color: 'green',
        skills: ['Pandas', 'NumPy', 'Statistical Analysis', 'A/B Testing']
      },
      {
        title: 'Machine Learning',
        icon: 'cpu',
        color: 'purple',
        skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Deep Learning']
      },
      {
        title: 'Visualization',
        icon: 'bar-chart',
        color: 'orange',
        skills: ['Tableau', 'Matplotlib', 'Seaborn', 'Plotly']
      },
      {
        title: 'Big Data',
        icon: 'database',
        color: 'indigo',
        skills: ['Spark', 'Hadoop', 'ETL Pipelines', 'Cloud Computing']
      },
      {
        title: 'Tools & Platforms',
        icon: 'wrench',
        color: 'red',
        skills: ['Jupyter', 'Git', 'Docker', 'AWS/Azure']
      }
    ];

    return (
      <section 
        id="skills" 
        className="py-20 bg-[var(--bg-light)]"
        data-name="skills" 
        data-file="components/Skills.js"
      >
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <div key={index} className="card">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${category.color}-100 mb-4`}>
                  <div className={`icon-${category.icon} text-xl text-${category.color}-600`}></div>
                </div>
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-[var(--text-secondary)]">
                      {skill}
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
    console.error('Skills component error:', error);
    return null;
  }
}