import * as React from "react";
import {
  SelectInput,
  getSiblingData,
  reduceFieldsToValues,
  useAllFormFields,
  useField,
} from "payload/components/forms";

export const CustomSelectComponent: React.FC<{ path: string }> = ({ path }) => {
  const { value, setValue } = useField<string>({ path });
  const [fields] = useAllFormFields();

  // Pass in fields, and indicate if you'd like to "unflatten" field data.
  // The result below will reflect the data stored in the form at the given time
  const formData = reduceFieldsToValues(fields, true);

  // Pass in field state and a path,
  // and you will be sent all sibling data of the path that you've specified
  const data = getSiblingData(fields, path);

  React.useEffect(() => {
    if (data.fullscreen && data.position === "bottom") {
      setValue("right");
    }
  }, [data]);
  return (
    <div>
      <label className="field-label">Image Position</label>
      <SelectInput
        path={path}
        name={path}
        options={
          data.fullscreen
            ? [
                {
                  label: "Left",
                  value: "left",
                },
                {
                  label: "Right",
                  value: "right",
                },
              ]
            : [
                {
                  label: "Left",
                  value: "left",
                },
                {
                  label: "Right",
                  value: "right",
                },
                {
                  label: "Bottom",
                  value: "bottom",
                },
              ]
        }
        value={value}
        onChange={(e) => setValue(e.value)}
      />
    </div>
  );
};
