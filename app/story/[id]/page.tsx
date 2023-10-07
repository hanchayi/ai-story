import Header from "@/components/header";
import prisma from "@/lib/prisma";
import Image from "next/image";


export default async function Story({ params }: { params: { id: string }} ) {
  const story = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, image: true },
      },
    },
  })

  if (!story) {
    throw new Error('invalid id ' + params.id)
  }

  return <div>
    <Header></Header>
    <Image
      className="h-80 w-full"
      src={ story.cover || '' }
      alt=""
      width={ 196 }
      height={ 132 }
    ></Image>

    <main className="px-6">
      <div className="flex mt-8 h-12 relative">
        <h2
          style={{
            color: "#000",
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: '30px',
          }}
        >{ story?.title || '' }</h2>
        <div className="absolute right-0 bottom-0 flex items-center">
          <Image
            src={story.author?.image || ' '}
            alt=""
            width={ 30 }
            height={ 30 }
          ></Image>
          <span className="ml-2"
            style={{
              color: '#A72062',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: 1.5,
            }}
          >{ story.author?.name }</span>
        </div>
      </div>
      <p
        style={{
          color: "#000",
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '24px',
        }}
      >
        { story.content }
      </p>

      <Tags marginTop='48px'/>
      <Tags marginTop='4px'/>
      <Categories />
      <Contributors />

      <div className="mt-12 flex justify-center">
        <button style={{
          width: '260px',
          height: '52px',
          border: '2.5px solid #15097A',
          borderRadius: '25px',
        }}>Enter Dream</button>
      </div>

      <div className="mt-8 flex justify-center">
        <div className='flex'>
          <a>
            View Dream Details
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <mask id="mask0_0_6173" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24L0 0H24V24H0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_0_6173)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 12L10 17V7L16 12V12Z" fill="#000989"/>
            </g>
          </svg>
        </div>
      </div>
    </main>
  </div>
}

function Tags({...props}: { marginTop: string }) {
  const tags = [
    '#Romantic',
    '#Fiction',
    '#Love story',
    '#Fiction',
  ]

  return (
    <div style={{
      marginTop: props.marginTop,
      color: "#A72062",
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '21px',
    }}>
      {
        tags.map(t => <span key={t}>{t}</span>)
      }
    </div>
  )
}

function Categories() {
  const categories = [
    'Time travel',
    'RPG',
    'Science Fiction',
    'Fantasy',
  ]

  return (
    <div
      className='flex flex-wrap mt-4'
      style={{
        color: "#15097A",
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '18px',
      }}
    >
      {
        categories.map(c => <span
          className="rounded mr-2 mt-2"
          style={{
            backgroundColor: '#EDEDED',
          }}
          key={c}>{c}</span>)
      }
    </div>
  )
}

function Contributors() {
  return (
    <div className='flex justify-between mt-6'>
      <div className='flex items-center'>
        <div className="relative"
          style={{
            width: '84px',
            height: '42px',
          }}
        >
          <div className="rounded-full absolute"
            style={{
              top: 0,
              width: '42px',
              height: '42px',
              backgroundColor: '#C4C4C4',
              border: '2px solid #969696'
            }}
          ></div>
          <div className="rounded-full absolute"
            style={{
              top: 0,
              left: '20px',
              width: '42px',
              height: '42px',
              backgroundColor: '#C4C4C4',
              border: '2px solid #969696'
            }}
          ></div>
          <div className="rounded-full absolute"
            style={{
              top: 0,
              left: '40px',
              width: '42px',
              height: '42px',
              backgroundColor: '#C4C4C4',
              border: '2px solid #969696'
            }}
          ></div>
        </div>
        <div style={{
          color: '#000989',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '21px',
        }}>
        +28 contributors
        </div>
      </div>

      <div className="flex items-center">
        <Image
          src={'/circle.svg'}
          alt=""
          width={18}
          height={18}
        ></Image>
        <div style={{
          color: '#15097A',
          fontSize: '20px',
          fontWeight: 700,
          lineHeight: '30px',
        }}>2429</div>
      </div>
    </div>
  )
}