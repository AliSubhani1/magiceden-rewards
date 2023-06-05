import Button from '@mui/material/Button';

interface ButtonType {
    type?: string,
    handleClick?: () => void,
    isDisabled?: boolean,
    children: string
}

const CustomButton = ({ handleClick, type, isDisabled, children }: ButtonType) => {
    return (
        <Button variant="contained" onClick={handleClick} disabled={isDisabled} className={type}>{children}</Button>
    );
}
export default CustomButton