import Typography from '@mui/material/Typography';

interface IHeaderProps {
    text: string;
}

const Header: React.FC<IHeaderProps> = ({text}: IHeaderProps) => {
    return (
        <h3>
            {text}
        </h3>
    )
}

export default Header;