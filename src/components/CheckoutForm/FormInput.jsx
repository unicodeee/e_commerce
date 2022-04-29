import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, useForm, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        defaultValue={""} // if not set will give a Warning of changing uncontrolled component to controlled component
        control={control}
        name={name}
        render={({ field }) => (
          // Material UI TextField already supports
          // `value` and `onChange`
          <TextField {...field} fullWidth label={label} required={required} />
        )}
      ></Controller>
    </Grid>
  );
};

export default FormInput;
