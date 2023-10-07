import Image from 'next/image'

export default function Carousel() {
  return (
    <div className='p-3'>
      <Image
        className="relative w-full"
        src="/cover.png"
        alt="carousel"
        width={396}
        height={265}
        priority
      />

    </div>
  )
}