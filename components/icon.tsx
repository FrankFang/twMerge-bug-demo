import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}
export const Icon: React.FC<Props> = props => {
  const { className, style } = props
  return (
    <span className={twMerge('border-2 border-blue-500 border-solid', className)} style={style} >
      😂
    </span >
  )
}
