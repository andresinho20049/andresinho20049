'use client'

import { Button, ButtonProps } from "flowbite-react"
import { ReactNode } from "react";

type IButtonComponentProps = ButtonProps & {
    children: ReactNode;
}

export const ButtonComponent = ({
    children, 
    ...props
}:IButtonComponentProps) => {
    return (
        <Button {...props} outline color="blue">
            {children}
        </Button>
    )
}