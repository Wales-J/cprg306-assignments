import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-purple-200">
      <h1 className="text-xl ml-5 mt-5 text-black">Shopping List</h1>
      <ItemList />
    </main>
  );
}