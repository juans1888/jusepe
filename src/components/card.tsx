import { HTMLProps } from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  restProps?: HTMLProps<HTMLDivElement>
  type?: 'main' | 'mobile'
}

const TYPE_CLASS = {
  main: 'min-w-[320px] max-w-6xl',
  mobile: 'w-[340px]'
}

function Card({
  children,
  className = '',
  type = 'main',
  ...restProps
}: CardProps) {
  return (
    <div
      className={`block p-4 bg-white rounded-lg border border-gray-200 shadow-md ${TYPE_CLASS[type]} ${className}`}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Card
