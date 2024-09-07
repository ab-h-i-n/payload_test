import { CollectionConfig } from "payload/types";

export const Items: CollectionConfig = {
  slug: "items",
  access: {
    read: () => true,
    create: () => true
  },  
  fields: [
    {
      name: "itemName",
      type: "text",
      required: true,
    },
  ],
};

export default Items;
