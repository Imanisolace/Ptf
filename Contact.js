function Contact() {
  try {
    const contactMethods = [
      {
        icon: 'mail',
        label: 'Email',
        href: 'mailto:danielmunyali356@gmail.com',
        color: 'blue',
      },
      {
        icon: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/daniel-musembi-691040347',
        color: 'blue',
      },
      {
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/Imanisolace',
        color: 'blue',
      },
      {
        icon: ' message-circle',
        label: 'WhatsApp',
        href: 'https://wa.me/254759359570',
        color: 'blue',
      },
    ];

    return (
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
        data-name="contact"
        data-file="components/Contact.js"
      >
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-12">Get In Touch</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-[var(--text-secondary)] mb-12">
              I am always open to new opportunities, collaborations, and conversations. Feel free to reach out through any of the platforms below; just by A SIMPLE CLICK👇!
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card text-center hover:shadow-xl transition-shadow"
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center bg-${method.color}-100 mx-auto mb-4`}
                  >
                    <i
                      data-lucide={method.icon}
                      className={`w-8 h-8 text-${method.color}-600`}
                    ></i>
                  </div>
                  <h3 className="font-bold mb-2">{method.label}</h3>
                  <p className="text-sm break-words text-blue-600 underline">
                    {method.href.replace('mailto:', '').replace('https://', '')}
                  </p>
                </a>
              ))}
            </div>

          </div>
        </div>
        <script>
          {`document.addEventListener("DOMContentLoaded", () => {
            lucide.createIcons();
          });`}
        </script>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
