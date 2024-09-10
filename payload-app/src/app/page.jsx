"use server";
import { AddItemForm } from "@/ui/AddItemForm";

export default async function Home() {
  const response = await fetch(`http://localhost:4000/api/items`);
  const Items = await response.json();

  return (
    <>
      <div>
        {Items?.docs.map((item) => (
          <div key={item.id}>{item.itemName}</div>
        ))}
      </div>

      <AddItemForm />
    </>
  );
}
