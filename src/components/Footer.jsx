import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} ClientPortal. Веб‑платформа для клиентов.
      </p>
    </footer>
  )
}

export default Footer
