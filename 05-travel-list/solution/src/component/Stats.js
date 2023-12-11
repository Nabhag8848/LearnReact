export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        Add Items to aviod forgetting important stuff!!
      </footer>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You Packed Things, ready to fly!!!`
          : `You have ${numItems} items on your list, and you already packed
          ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
