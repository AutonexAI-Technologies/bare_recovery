interface Props {
  className?: string
  style?: React.CSSProperties
}

export default function InstagramFollowerCount({ className, style }: Props) {
  return (
    <span className={className} style={style}>
      83.6K
    </span>
  )
}
