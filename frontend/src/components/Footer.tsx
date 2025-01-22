

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <p className="text-sm">
              © {currentYear} DocTrim. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;