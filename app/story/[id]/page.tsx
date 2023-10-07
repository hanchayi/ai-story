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
      src={ story.cover || '' }
      alt=""
      width={ 196 }
      height={ 132 }
    ></Image>
    <div className="flex">
      <h2>{ story?.title || '' }</h2>
      <div>
        <Image
          src={story.author?.image || ' '}
          alt=""
          width={ 30 }
          height={ 30 }
        ></Image>
        <span>{ story.author?.name }</span>
      </div>
    </div>
    <p>
      { story.content }
    </p>

    <div>
      <span>Romantic</span>
      <span>Romantic</span>
      <span>Romantic</span>
      <span>Romantic</span>
      <span>Romantic</span>
    </div>

    <div>
      <span>Time travel</span>
      <span>RPG</span>
      <span>Science Fiction</span>
      <span>Fantasy</span>
    </div>

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

  </div>
}