import { useEffect, useState } from 'react';
import { FiEye } from 'react-icons/fi';

export default function VisiterCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/dharaneesh-freelance/visits')
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => setCount('---'));
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <FiEye size={16} />
      <span>{count ?? '...'}</span>
    </div>
  );
}