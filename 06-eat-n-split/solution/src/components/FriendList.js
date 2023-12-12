import AddFriend from "./AddFriend";
import Friend from "./Friend";

export default function FriendList({ friends, onAddFriend, onSelect, openId }) {
  return (
    <ul className="sidebar">
      <Friend friends={friends} onSelect={onSelect} openId={openId} />
      <AddFriend onAddFriend={onAddFriend} />
    </ul>
  );
}
