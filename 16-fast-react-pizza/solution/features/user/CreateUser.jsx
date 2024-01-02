import { useState } from "react";
import Button from "../../ui/Button";

export default function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-base md:text-xl">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 md:w-96"
      />

      {username !== "" && (
        <div>
          <Button to="/menu" type="primary">
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}
