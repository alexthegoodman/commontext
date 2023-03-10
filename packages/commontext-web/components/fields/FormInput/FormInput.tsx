import * as React from "react";

import { FormInputProps } from "./FormInput.d";
import SimpleErrorMessage from "../SimpleErrorMessage/SimpleErrorMessage";

import styles from "./FormInput.module.scss";

const FormInput: React.FC<FormInputProps> = ({
  //   name = "",
  //   type = "text",
  validation = {},
  errors = null,
  register = null,
  ...fieldProps
}) => {
  return (
    <div className={styles.formInput}>
      <input {...fieldProps} {...register(fieldProps.name, validation)} />
      <SimpleErrorMessage errors={errors} fieldProps={fieldProps} />
    </div>
  );
};

export default FormInput;
