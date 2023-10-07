import Image from 'next/image'

export default function Header() {
  return (
    <div className="fixed top-0 right-0 left-0 flex items-center h-20 px-3 justify-between z-10">
      <Image
        className="relative w-9 h-9"
        src="/back.svg"
        alt="Back"
        width={36}
        height={36}
        priority
      />
      <Image
        className="relative w-9 h-9"
        src="/nav.svg"
        alt="Nav"
        width={36}
        height={36}
        priority
      />
    </div>
  )
}

