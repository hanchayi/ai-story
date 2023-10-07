'use client';

import Image from 'next/image'
import { useState } from 'react';

interface Item {
  id: string;
  url: string;
}

const items: Item[] = [
  {
    id: '1',
    url: '/cover.png'
  },
  {
    id: '2',
    url: '/cover.png'
  },
  {
    id: '3',
    url: '/cover.png'
  },
  {
    id: '4',
    url: '/cover.png'
  },
  {
    id: '5',
    url: '/cover.png'
  },
  {
    id: '6',
    url: '/cover.png'
  },
  {
    id: '7',
    url: '/cover.png'
  },
]

export default function Carousel() {
  // const getTransform = index => `translateX(-${(index + 1) * 220}px)`;
  const [ curIndex, setCurIndex ] = useState(0)

  return (
    <div className='p-3'>
      <div className='overflow-hidden relative h-48'>
        {
          items.map(item => <CarouselItem key={ item.id } item={ item }></CarouselItem>)
        }
      </div>
      <div className='w-full flex items-center justify-center mt-1'>
         {
          items.map((item, index) => <CarouselDot key={ item.id } active={ curIndex === index }></CarouselDot>)
         }
      </div>
    </div>
  )
}

function CarouselDot({ ...props }: { active?: boolean}) {
  if (props.active) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C7.65686 0 9 1.34315 9 3C9 4.65685 7.65686 6 6 6H3C1.34314 6 0 4.65685 0 3C0 1.34315 1.34314 0 3 0H6V0Z" fill="#C84B6A"/>
      </svg>
    )
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" style={{
      margin: '2px'
    }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 0C4.65685 0 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0Z" fill="#C4C4C4"/>
    </svg>
  )
}

function CarouselItem({ ...props }: { item: Item }) {
  const { item } = props
  return (<Image
    className="w-full absolute"
    style={{
      left: 0,
      right: 0,
      top: 0
    }}
    src={ item.url }
    alt="carousel"
    width={396}
    height={265}
    priority
  />)
}