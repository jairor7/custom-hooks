import { useEffect, useState } from "react";

export const useCoords = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;
  useEffect(() => {
    console.log("componente montado");
    const mouseMove = (e) => {
      setCoords({ x: e.x, y: e.y });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      console.log("Componente desmontado");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return [coords, x, y];
};
