"use server";
import { AddItemForm } from "@/ui/AddItemForm";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOADURL}/api/items`);
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
