import { ReactNode } from "react"

type HeaderProps = {
    children: ReactNode
}

export default function Heading({ children }: HeaderProps) {
    return (
        <h1 className="text-2xl my-10">
            {children}
        </h1>
    )
}
