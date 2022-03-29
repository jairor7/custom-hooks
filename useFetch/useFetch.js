import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  const isMounted = useRef(true);
  // const isMounted = useRef(1);

  useEffect(() => {
    return () => {
      isMounted.current = false;
      // isMounted.current = 2;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // setTimeout(() => {
        // if (isMounted.current) {
        // if (isMounted.current === 1) {
        isMounted.current &&
          setState({ data, loading: false, error: null });
        // setState({ data, loading: false, error: null });
        // } else console.log("No se llamo setState");
        // }, 3000);
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error:
            "Error en la petición, no se pudo cargar la info",
        });
      });
  }, [url]);

  return state;
};
