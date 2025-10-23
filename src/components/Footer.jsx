import "../App.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <p className="footer-text">
          &copy; {currentYear} Movieduckk, All rights reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
