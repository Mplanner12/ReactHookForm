// import { useState } from 'react'
import "./App.css";
import { UserForm } from "./components/UserForm";
import UserFormWithZod from "./components/UserFormWithZod";

function App() {
  return (
    <div>
      {/* use any of the below */}
      <UserForm />
      <UserFormWithZod />
    </div>
  );
}

export default App;
