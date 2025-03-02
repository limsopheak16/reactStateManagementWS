import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/ store";
import axios from "axios"; // Import axios

export const ShoppingList = () => {
  const navigate = useNavigate();
  const userName = useSelector((state: RootState) => state.user.name);

  // Local state for fetched items
  const [apiItems, setApiItems] = useState<{ id: number; title: string }[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data using Axios
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")  // Axios GET request
      .then((response) => {
        setApiItems(response.data.slice(0, 10));  // Get first 10 items for display
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 min-h-screen min-w-screen bg-gray-100 flex flex-col items-center text-black">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <p className="text-lg mb-4">Welcome, {userName || "Guest"}!</p>

      {/* Show loading message */}
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : apiItems.length === 0 ? (
        <p className="text-gray-500">Nothing to buy yet!</p>
      ) : (
        <ul className="space-y-2 w-full max-w-md">
          {apiItems.map((item) => (
            <li key={item.id} className="flex items-center justify-between p-2 bg-white rounded shadow">
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      )}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => navigate("/add-item")}
      >
        Add Item
      </button>
    </div>
  );
};
