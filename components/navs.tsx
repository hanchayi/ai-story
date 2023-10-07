import Image from "next/image";

export default function Navs() {
  return <div className="flex h-16 w-full justify-center items-center">
    <ul className="w-2/3 flex justify-between items-center">
      <li className="h-14 flex flex-col justify-center items-center">
        <Image
          className="relative w-6 h-6"
          src="/home.svg"
          alt="Nav"
          width={36}
          height={36}
          priority
        />
        Home
      </li>
      <Image
        className="h-14"
        src="/nav.png"
        width={61}
        height={61}
        alt=""
      ></Image>
      <li
        className="h-14 flex flex-col justify-center items-center"
        style={{
          color: '#A9A4CC'
        }}
      >
        <Image
          className="relative w-6 h-6"
          src="/mine.svg"
          alt="Nav"
          width={36}
          height={36}
          priority
        />
        Mine
      </li>
    </ul>
  </div>
}
