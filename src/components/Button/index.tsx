import styles from './button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: Function;
  color?: 'primary' | 'gray';
  className?: string;
}

const Button = ({
  children,
  onClick,
  color = 'primary',
  className = ''
}: ButtonProps) => {
  return (
    <button
      className={`
        ${styles.button}
        ${color ? styles[color] : 'primary'}
        ${className}
      `}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
    >
      {children}
    </button>
  );
}

export default Button;
