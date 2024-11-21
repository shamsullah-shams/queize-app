import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import { UserContext } from "./context/UserContext";

// const App = () => {
//   const [user, setUser] = useState({ name: "Khan", email: "khan@gmail.com" });

//   return (
//     <UserContext.Provider value={{ user }}>
//       <Login />
//     </UserContext.Provider>
//   );
// };

const App = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  // return <RouterProvider router={router} />;
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />;
    </UserContext.Provider>
  );
};

export default App;
