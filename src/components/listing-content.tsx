/** @jsxImportSource preact */
const ListingContent = ({ items = [] }: { items: string[] }) => {
  if (items.length === 1) {
    return (
      <div class="prose prose-sm">
        <p>{items[0]}</p>
      </div>
    );
  }

  return (
    <div class="prose prose-sm">
      <ul>
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListingContent;
