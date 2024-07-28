import styles from "./button.module.scss";

export enum ButtonTypes {
    button = "button",
    submit = "submit",
    reset = "reset",
}
interface CustomButtonProps {
    onClick: () => void;
    text: string;
    color: string;
    bgcolor: string;
    type: ButtonTypes;
}

export const Button = ({
    onClick,
    text,
    color,
    bgcolor,
    type = ButtonTypes.button,
}: CustomButtonProps) => (
    <button
        onClick={onClick}
        className={styles.customButton}
        type={type}
        style={{ backgroundColor: bgcolor, color }}>
        {text}
    </button>
);
