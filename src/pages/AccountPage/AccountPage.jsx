import React, { useState, useEffect } from "react";

export default function AccountPage() {
  const [user, setUser] = useState(null);

  return (
    <>
      <h2>Login</h2>
      <div>
        <p>Login prompt will go here after building the endpoint</p>
        <a href="http://localhost:5050/auth/">Test</a>
      </div>
    </>
  );
}
