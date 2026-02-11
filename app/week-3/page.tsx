import ItemList from "./item-list.tsx";

export default function Page() {
  return (
    <main class="bg-purple-200">
      <h1 class="text-xl ml-5 mt-5 text-black">Shopping List</h1>
      <ItemList />
    </main>
  );
}