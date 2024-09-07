'use client';

export function AddItemForm() {
  const addItem = async (itemName) => {
    try {
      const response = await fetch('http://localhost:4000/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemName: itemName }),
      });

      if (!response.ok) {
        throw new Error('Failed to add item');
      }

      return await response.json();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const itemName = event.target.elements['item-name'].value;

    if (itemName) {
      await addItem(itemName);
      window.location.reload();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="item-name" id="item-name" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
