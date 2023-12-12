export default function Friend({ friends, openId, onSelect }) {
  return (
    <div>
      {friends.map((friend) => (
        <li key={friend.id}>
          <img src={friend.image} alt={friend.id} />
          <h2>{friend.name}</h2>
          <p
            className={
              friend.balance < 0 ? "red" : friend.balance > 0 ? "green" : ""
            }
          >
            {friend.balance < 0
              ? `You owe ${friend.name} $${Math.abs(friend.balance)}`
              : friend.balance > 0
              ? `${friend.name} owes you $${friend.balance}`
              : `You and ${friend.name} are even`}
          </p>
          <button
            className="button"
            id={friend.id}
            onClick={(e) => {
              const eventId = Number(e.target.id);
              onSelect(eventId, openId);
            }}
          >
            {openId == friend.id ? `Close` : `Select`}
          </button>
        </li>
      ))}
    </div>
  );
}
