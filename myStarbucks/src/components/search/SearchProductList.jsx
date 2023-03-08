import { useParams } from "react-router";

function Search() {
  const [searchData, setSearchData] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "http://localhost:3000/product/search?word=" + params.word
      );
      console.log(result.data.result);
      setSearchData(result.data.result);
    }
    fetchData();
  }, []);
}
