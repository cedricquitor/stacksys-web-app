import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState(null);

  const viewLogin = (value) => {
    setIsLogin(value);
    setError(false);
  };

  return (
    <div>
      <div>
        <form action="">
          <h2>{isLogin ? "Login" : "Register"}</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {!isLogin ? <input type="password" placeholder="Re-enter password" /> : null}
          <input type="submit" />
          {error ? <p>{error}</p> : null}
        </form>
        <div>
          <button onClick={() => viewLogin(false)}>Register</button>
          <button onClick={() => viewLogin(true)}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
