import { useEffect, useRef, useState } from "react";

export default function MockupReveal3D({ children }: { children: React.ReactNode }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-container-3d ${isRevealed ? "is-revealed" : ""}`}
    >
      {children}
    </div>
  );
}
