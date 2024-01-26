import { Field } from "payload/types";
import { CustomSelectComponent } from "./custom-select-component";

export const CustomSelect: Field = {
  name: "position",
  type: "text",
  admin: {
    components: {
      Field: CustomSelectComponent,
    },
  },
};
