import { useEffect, useState } from 'react';

export default function LoaderScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loader-screen" aria-live="polite" aria-label="Loading Twin Trails website">
      <div className="loader-content">
        <div className="loader-logo-wrap">
          <img src="/assets/twin-trails-logo.png" alt="Twin Trails logo" className="loader-logo" />
        </div>

        <div className="loader-text-block">
          <p className="loader-kicker">Twin Trails</p>
          <h2>Travel Beyond Boundaries</h2>
        </div>

        <div className="loader-bar" aria-label="Loading website progress">
          <span className="loader-bar-fill" />
        </div>
      </div>
    </div>
  );
}
