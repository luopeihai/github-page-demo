import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="home"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Home page</h2>
      <Link to="/detail">
        <h3>go to detail</h3>
      </Link>
    </div>
  );
}

export default Home;
