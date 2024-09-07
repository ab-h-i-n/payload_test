"use server";
import { AddItemForm } from "@/ui/AddItemForm";

export default async function Home() {
  const response = await fetch(`http://localhost:4000/api/items`);
  const Items = await response.json();

  const handleSubmit = async(FormData) => {
    "use server"
    const formObject = Object.fromEntries(FormData.entries());
    
    await fetch('http://localhost:4000/api/items')

  } 


  return (
    <>
      <div>
        {Items?.docs.map((item) => (
          <div key={item.id} >{item.itemName}</div>
        ))}
      </div>

      <form action={handleSubmit}>
        <input type="text" name="itemName" />
        <button type="submit" >Add</button>
      </form>
    </>
  );
}
