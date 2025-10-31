function Header() {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
        data-name="header" 
        data-file="components/Header.js"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">DS Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-[var(--primary-color)] transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-[var(--primary-color)] transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-[var(--primary-color)] transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-[var(--primary-color)] transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-[var(--primary-color)] transition-colors">Contact</button>
            </div>
          </div>
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}