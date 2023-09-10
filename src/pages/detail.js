import { Link } from "react-router-dom";

function Detail() {
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
      <h2>Detail page</h2>
      <Link to="/">
        <h3>go to home</h3>
      </Link>
    </div>
  );
}

export default Detail;
