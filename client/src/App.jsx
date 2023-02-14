import { useEffect } from "react";
import { ListHeader, ListItem } from "./components";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const userEmail = "test@test.com";
    try {
      const response = await fetch(`http://localhost:8000/api/v1/systems/${userEmail}`);
      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  // Call getData on page render
  useEffect(() => getData, []);

  // Sort systems by date
  const sortedSystems = data?.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-[800px] mt-12">
      <ListHeader listName={`🏝 Holiday tick list`} />
      {sortedSystems?.map((system) => (
        <ListItem key={system.id} system={system} />
      ))}
    </div>
  );
};

export default App;
