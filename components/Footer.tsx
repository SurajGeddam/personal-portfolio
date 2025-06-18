export default function Footer() {
  return (
    <footer className="bg-background text-gray-200 py-8">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
        <p className="font-body">
          📧 <a href="mailto:geddamsuraj@gmail.com" className="hover:text-primary text-primary">geddamsuraj@gmail.com</a>
        </p>
        <p className="font-body">
          📞 <a href="tel:+16784310189" className="hover:text-primary text-primary">678-431-0189</a>
        </p>
        <p className="font-body">
          🐙 <a href="https://github.com/SurajGeddam" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-primary">github.com/SurajGeddam</a>
        </p>
        <p className="font-body">
          🔗 <a href="https://linkedin.com/in/suraj-geddam" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-primary">
            linkedin.com/in/suraj-geddam
          </a>
        </p>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Suraj Geddam. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 