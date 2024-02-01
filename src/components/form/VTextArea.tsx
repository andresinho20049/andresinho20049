// import { TextField, TextFieldProps } from "@mui/material"
import { useField } from "@unform/core";
import { FloatingLabel, FloatingLabelProps, Textarea, TextareaProps } from "flowbite-react";
import { useEffect, useState, useCallback } from "react";


type IVTextFieldProps = TextareaProps & {
    name: string;
    customChange?: (value: any) => any;
}

export const VTextArea = ({ name, customChange, ...rest }: IVTextFieldProps) => {

    const {
        fieldName,
        registerField,
        defaultValue,
        error,
        clearError
    } = useField(name);

    const [value, setValue] = useState(defaultValue || '');

    const handleChange = useCallback((value: any) => {
        if(!!customChange && !!value) {
            setValue(customChange?.(value));
        } else {
            setValue(value);
        }
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            getValue: () => value,
            setValue: (_, newValue) => handleChange(newValue),
        })
    }, [registerField, fieldName, value])

    return (
      <Textarea
        {...rest}
        color={!!error ? "failure" : "gray"}
        helperText={error}
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={() => (error ? clearError() : undefined)}
      />
    );
}