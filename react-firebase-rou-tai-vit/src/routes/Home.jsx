import Title from "../components/Title";
import {useFirestoreState } from "../hooks/useFirestore";

const Home = () => {
  const { data, loading, error, getData } =useFirestoreState();
  const [url, setUrl] = useState("");

  useEffect(() => {
    console.log("getData");
    getData();
  }, []);

  const loadingData = loading.getData && <p>Loading data...</p>;
  const errorData = error && <p>{error}</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addData(url);
    setUrl("");
  };


  return (
    <>
      <Title text="Home" />
      {loadingData}
      {errorData}
      {data?.map(({ nanoid, origin }) => (
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="Ingresa una URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
          />
        </form>
      ))}
       {data?.map(({ nanoid, origin }) => (
                <div key={nanoid}>
                    <p>{origin}</p>
                    <button>Editar</button>
                    <button onClick={() => handleButtonDelete(nanoid)}>
                        Eliminar
                    </button>
                </div>
            ))}
    </>
  );
};

export default Home;