import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { FiEye } from "react-icons/fi";
import { db } from "../firebase";

export default function VisiterCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        const visitorRef = doc(db, "stats", "website");

        // Increase visitor count by 1
        await updateDoc(visitorRef, {
          visits: increment(1),
        });

        // Get updated count
        const snapshot = await getDoc(visitorRef);

        if (snapshot.exists()) {
          setCount(snapshot.data().visits);
        }
      } catch (error) {
        console.error("Visitor count error:", error);
      }
    };

    updateVisitorCount();
  }, []);

  return (
    <div className="visitor-count" aria-label="Website visitors">
      <FiEye size={18} />
      <span>{count ?? "---"}</span>

      <style>{`
        .visitor-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #818cf8;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .visitor-count svg {
          flex-shrink: 0;
        }

        .visitor-count span {
          min-width: 28px;
          text-align: center;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}