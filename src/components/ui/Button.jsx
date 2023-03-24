// Props
// size: 'small' | '' (default)

export const Button = ({ children, size = '', className, ...attrs }) => {
  const sizeClasses = size === 'small' ? 'h-7 w-7' : 'h-8 w-8'

  return (
    <button className={`inline-flex items-center justify-center rounded-md ${sizeClasses} ${className}`} {...attrs}>
      {children}
    </button>
  )
}
