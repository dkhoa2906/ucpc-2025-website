import { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

export function TiltCard({ children, options, className = "" }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, options || {
      max: 30,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      scale: 1.05,
    });

    return () => tiltRef.current.vanillaTilt.destroy();
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}
