import CreateUser from "../features/user/CreateUser";

export default function Home() {
  return (
    <div className="mb-14 mt-36 text-center sm:mb-28 sm:mt-40">
      <h1
        className="mb-10 text-center font-sans text-5xl font-semibold text-red-500
      md:text-6xl "
      >
        La Minoz 🍕
        <br />
        Fresh out of the Oven, Straight to You! 🚀
      </h1>
      <CreateUser />
    </div>
  );
}
