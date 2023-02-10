import { useEffect } from "react";
import { ListHeader } from "./components";

const App = () => {
  const getData = async () => {
    const userEmail = "test@test.com";
    try {
      const response = await fetch(`http://localhost:8000/api/v1/systems/${userEmail}`);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  // Call getData on page render
  useEffect(() => getData, []);

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-[800px] mt-12">
      <ListHeader listName={`🏝 Holiday tick list`} />
    </div>
  );
};

export default App;
