import { IconBaseProps } from "react-icons";

interface ButtonProps {
  text: string;
  Icon?: React.ComponentType<IconBaseProps>;
  iconSize?: number,
  className?: string 
}

const Button = (props: ButtonProps) => {
  const { text, Icon, className, iconSize } = props;
  
  return (
    <button className={`border border-secondary rounded-3xl ${props.Icon?"px-3":"px-6"} hover:bg-secondary/10 cursor-pointer select-none flex items-center space-x-2`}>
      {
        Icon && <Icon className={className} size={iconSize} />  // Render the icon if it exists
      }
      <span>{text}</span>
    </button>
  );
};

export default Button;
