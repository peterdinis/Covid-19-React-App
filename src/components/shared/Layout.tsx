import { ReactNode } from "react"

interface ILayoutProps {
    children?: ReactNode
}

const Layout: React.FC<ILayoutProps> = ({children}: ILayoutProps) => {
    return (
        <>
         {children}
        </>
    )
}

export default Layout