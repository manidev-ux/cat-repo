import { useState } from "react";
import { useDispatch } from "react-redux";

import { useGetUsersQuery } from "../features/user/api";
import { setUser } from "../features/user/userSlice";
import type { AppDispatch } from "../app/store";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { data: users = [], isLoading, error } = useGetUsersQuery();

  const [name, setName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = () => {
    if (!name) {
      setErrorMsg("Name is required");
    } else {
      setErrorMsg("");
      dispatch(setUser(name));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-6 text-white">
      <div className="w-full max-w-md space-y-6 rounded-xl bg-gray-800 p-6 shadow-lg">
        <h1 className="text-center text-2xl font-bold">Dashboard</h1>

        {/* Input Section */}
        <div className="space-y-4">
          <Input
            label="Your Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errorMsg}
          />

          <Button onClick={handleSubmit}>Save Name</Button>
        </div>

        {/* Users List */}
        <div>
          <h2 className="mb-2 text-lg font-semibold">Users</h2>

          {isLoading && <p className="text-gray-400">Loading...</p>}
          {error && <p className="text-red-500">Error fetching users</p>}

          <ul className="space-y-2">
            {users.slice(0, 5).map((user) => (
              <li
                key={user.id}
                className="rounded-md bg-gray-700 px-3 py-2 hover:bg-gray-600"
              >
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;