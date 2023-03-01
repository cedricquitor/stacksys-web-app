import { useEffect, useState } from "react";
import { Auth, ListHeader, ListItem, Modal } from "./components";

const App = () => {
  const [data, setData] = useState(null);

  const [authToken, setAuthToken] = useState(false);

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
      {/* Render page when authToken exists */}
      {authToken ? (
        <>
          <ListHeader listName={`🏝 Holiday tick list`} />
          {sortedSystems?.map((system) => (
            <ListItem key={system.id} system={system} />
          ))}
        </>
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default App;
