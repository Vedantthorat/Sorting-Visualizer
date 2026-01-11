const Contact = () => {
  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <p>Email: support@sortingvisualizer.com</p>
      <p>GitHub: github.com/your-username</p>
      <p>LinkedIn: linkedin.com/in/your-profile</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "auto",
  },
};

export default Contact;
