'use client'

import { Button } from "flowbite-react"
import { ReactNode } from "react";

interface IButtonComponentProps {
    onClick: () => void;
    children: ReactNode;
}

export const ButtonComponent = ({
    onClick,
    children
}:IButtonComponentProps) => {
    return (
        <Button onClick={onClick} outline color="blue">
            {children}
        </Button>
    )
}