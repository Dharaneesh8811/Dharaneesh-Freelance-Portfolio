import { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";

export default function VisiterCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // Replace "dharaneesh-portfolio" with any unique name for your site
    fetch("https://api.countapi.xyz/hit/dharaneesh-portfolio/visits")
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => setCount("---"));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "var(--accent-hover)",
        fontSize: "0.9rem",
        fontWeight: 600,
      }}
    >
      <FiEye size={18} />
      <span>{count ?? "..."}</span>
    </div>
  );
}
