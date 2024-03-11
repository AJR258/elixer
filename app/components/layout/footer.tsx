import "./layout.css";

function Footer() {
  return (
    <div className="footer">
      <p> &copy; Elixer {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
