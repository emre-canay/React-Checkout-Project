import Main from "./pages/Main";
import Header from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [data, setData] = useState([]);
  const BASE_URL = "https://63fa3d35897af748dccbb376.mockapi.io/example1";
  const getData = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(data)
  return (
    <>
      <Header getData={getData} />
      <Main data={data} getData={getData} />
    </>
  );
};
export default App;
