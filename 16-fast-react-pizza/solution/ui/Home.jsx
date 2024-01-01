import CreateUser from "../features/user/CreateUser";

export default function Home() {
  return (
    <div className="mt-36 text-center mb-14">
      <h1
        className="mb-10 text-center font-mono text-3xl font-semibold
      text-red-500"
      >
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
      <CreateUser />
    </div>
  );
}
