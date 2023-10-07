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

      <div className='flex justify-between'>
        <div>
          <div>
            <div></div>
          </div>
          <div>
          +28 contributors
          </div>
        </div>

        <div>
          <div>2429</div>
        </div>
      </div>

      <div>
        <button>Enter Dream</button>
      </div>

      <a>
      View Dream Details
      </a>
    </main>
  </div>
}

export function Tags({...props}: { marginTop: string }) {
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

export function Categories() {
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