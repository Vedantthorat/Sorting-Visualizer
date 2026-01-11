import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header style={styles.header}>
      <h2>Sorting Visualizer</h2>

      <nav>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/visualizer">Visualizer</Link>
        <Link style={styles.link} to="/compare">Compare</Link>
        <Link style={styles.link} to="/contact">Contact</Link>

        <button
          style={styles.toggle}
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          {theme === "light" ? "🌙" : "🌞"}
        </button>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: "#0f9d58",
    color: "white",
    padding: "14px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    marginLeft: "18px",
    color: "white",
    fontWeight: "500",
  },
  toggle: {
    marginLeft: "20px",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    padding: "6px 10px",
    fontSize: "16px",
  },
};

export default Header;
