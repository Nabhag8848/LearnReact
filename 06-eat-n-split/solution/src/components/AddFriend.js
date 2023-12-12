import { useState } from "react";

export default function AddFriend({ onAddFriend }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/48");

  function handleOnAddFriend(e) {
    e.preventDefault();

    if (name !== "" && img !== "") {
      onAddFriend(e, [name, img]);
      setName("");
      setImg("https://i.pravatar.cc/48");
      setIsOpen(false);
    }
  }

  return (
    <div className="sidebar">
      {isOpen ? (
        <>
          <form className="form-add-friend">
            <label>👫 Friend name</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <label>🌄 Image URL</label>
            <input
              value={img}
              onChange={(e) => {
                setImg(e.target.value);
              }}
            ></input>
            <button
              className="button"
              onClick={(e) => {
                handleOnAddFriend(e);
              }}
            >
              Add Friend
            </button>
          </form>
          <button className="button" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </>
      ) : (
        <button className="button" onClick={() => setIsOpen(true)}>
          Add Friend
        </button>
      )}
    </div>
  );
}
