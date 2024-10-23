import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { IMAGES } from "../assets";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        return console.log("Error");
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="shadow-2xl flex max-w-2xl rounded-xl relative bg-white">
        <div className="p-5 border-[0.25px] max-sm:rounded-xl rounded-tl-xl rounded-bl-xl flex flex-col justify-center">
          <img
            src={IMAGES.logo}
            alt=""
            className="w-[50px] absolute top-[20px] left-[20px] max-sm:hidden"
          />
          <h1 className="text-xl mb-4 font-semibold text-center">Login</h1>
          <div className="flex flex-col gap-4">
            <Input
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              icon={<FaEnvelope size={14} />}
            />
            <Input
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              icon={<FaLock size={14} />}
            />
            <Button title="Login" onClick={handleLogin} />
          </div>

          <p className="text-sm text-center mt-8">
            Don't have an account?{" "}
            <span className="text-blue-500 hover:text-blue-700 transition-colors cursor-pointer">
              Sign Up
            </span>
          </p>
        </div>

        <div className="w-[300px] max-sm:hidden">
          <img
            src={IMAGES.loginRocket}
            className="rounded-tr-xl rounded-br-xl h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
