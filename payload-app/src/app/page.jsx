"use server";
import { AddItemForm } from "@/ui/AddItemForm";

export default async function Home() {
  let Items;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOADURL}/api/items`
    );
    Items = await response.json();
  } catch (error) {
    console.error(error);
    return <div>Failed to Fetch! 404</div>;
  }

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
