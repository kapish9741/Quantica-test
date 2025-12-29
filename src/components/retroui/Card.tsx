import * as React from 'react'
import { cn } from '@/lib/utils'

function Card({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('rounded-lg border-2 bg-transparent', className)} {...props}>
      {children}
    </div>
  )
}

function CardHeader({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('px-4 pt-3 pb-2', className)} {...props}>
      {children}
    </div>
  )
}

function CardTitle({ className, children, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3 className={cn('text-lg font-semibold', className)} {...props}>
      {children}
    </h3>
  )
}

function CardDescription({ className, children, ...props }: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-sm mt-1 text-muted', className)} {...props}>
      {children}
    </p>
  )
}

function CardContent({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('p-4', className)} {...props}>
      {children}
    </div>
  )
}

const CardObject = Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
})

export { CardObject as Card }
