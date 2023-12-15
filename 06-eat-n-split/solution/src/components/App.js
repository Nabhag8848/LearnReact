import { useState } from "react";
import SplitBill from "./SplitBill";
import FriendList from "./FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [openId, setOpenId] = useState("");

  function handleAddFriend(e, [name, image]) {
    e.preventDefault();

    const newFriend = {
      id: Date.now(),
      name,
      image,
      balance: 0,
    };

    setFriends((friends) => [...friends, newFriend]);
  }

  function handleSelect(eventId, openId) {
    if (eventId === openId) {
      setOpenId("");
    } else {
      setOpenId(Number(eventId));
    }
  }

  function handleSplit(e, { id, my, friend, payer_friend, name, image }) {
    e.preventDefault();
    const index = friends.findIndex((e) => e.id === id);
    const currentBalance = friends[index].balance;
    const changeBalance = payer_friend ? my : -friend;
    const newFriends = [
      ...friends.slice(0, index),
      { id, name, image, balance: currentBalance + changeBalance },
      ...friends.slice(index + 1, friends.length),
    ];
    setFriends(newFriends);
    setOpenId("");
  }

  return (
    <div className="app">
      <FriendList
        friends={friends}
        onAddFriend={handleAddFriend}
        onSelect={handleSelect}
        openId={openId}
      />
      <SplitBill
        id={openId}
        friends={friends}
        onSplit={handleSplit}
        key={openId}
      />
    </div>
  );
}
