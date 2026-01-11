const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* BRAND */}
        <div>
          <h2 style={styles.logo}>Sorting Visualizer</h2>
          <p>Learn • Visualize • Compare Algorithms</p>
        </div>

        {/* CONTACT WITH SMALL ICONS */}
        <div>
          <h4>Connect</h4>

          <a
            href="https://github.com/Vedantthorat"
            target="_blank"
            rel="noreferrer"
            style={styles.iconLink}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg
"
              alt="GitHub"
              style={styles.icon}
            />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vedant-thorat-156b8628b/"
            target="_blank"
            rel="noreferrer"
            style={styles.iconLink}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              style={styles.icon}
            />
            LinkedIn
          </a>

          <a
            href="vedantthorat019@gmail.com"
            style={styles.iconLink}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email"
              style={styles.icon}
            />
            Email
          </a>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Visualizer</p>
          <p>Compare</p>
        </div>
      </div>

      <div style={styles.bottom}>
        © 2026 Sorting Algorithm Visualizer
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#1f1f1f",
    color: "#ccc",
    marginTop: "60px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "30px",
    padding: "40px 30px",
  },
  logo: {
    color: "#0f9d58",
  },
  iconLink: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "10px",
    color: "#ccc",
    fontSize: "14px",
  },
  icon: {
    width: "16px",   // ✅ very small icon
    height: "16px",
  },
  bottom: {
    textAlign: "center",
    padding: "12px",
    borderTop: "1px solid #333",
    fontSize: "13px",
    color: "#aaa",
  },
};

export default Footer;
