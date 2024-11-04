import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-3 gap-4',
        className
      )}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta
}) => (
  <div
    key={name}
    className={cn(
      'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl',
      'transform-gpu bg-[var(--background)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      className
    )}
  >
    <div>{background}</div>
    <div className='pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10'>
      <div className='h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75' />
      <h3 className='text-xl font-semibold  text-neutral-300'>{name}</h3>
      <p className='max-w-lg text-neutral-400'>{description}</p>
    </div>

    <div
      className={cn(
        'pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white z-10 gap-2'
      )}
    >
      <Button
        variant='ghost'
        asChild
        size=''
        className='pointer-events-auto rounded-full border border-solid border-white/[.145]'
      >
        <a href={href} className='flex row gap-2'>
          <Image
            aria-hidden
            src='/link.svg'
            alt='Link icon'
            width={20}
            height={20}
          />
          {cta}
        </a>
      </Button>
      <Button
        variant='ghost'
        asChild
        size=''
        className='pointer-events-auto rounded-full border border-solid border-white/[.145]'
      >
        <a href={href} className='flex row gap-2'>
          <Image
            aria-hidden
            src='/github2.svg'
            alt='Link icon'
            width={20}
            height={20}
          />
          Repository
        </a>
      </Button>
    </div>
    <div className='pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/30' />
  </div>
)

export { BentoCard, BentoGrid }
