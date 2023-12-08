import { useEffect, useState } from "react";

const useDataApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }3

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};
export default useDataApi;
// const useFetch = (url: string, params?: Record<string, string>) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const q = new URLSearchParams(params).toString();
//   useEffect(() => {
//     const option: RequestInit = {
//       method: "GET",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     setLoading(true);
//     fetch(url + q, option)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("Error fetching data");
//         }
//       })
//       .then((data) => setData(data))
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false));
//   }, [url, q]);

//   return { data, loading, error };
// };

// export default useFetch;
