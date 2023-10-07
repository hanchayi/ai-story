import prisma from "@/lib/prisma";
import Image from "next/image";

interface StoryItem {
  id: string;
  url: string;
  title: string;
  desc: string;
  author: {
    name: string;
    image: string;
  };
}

async function getData() {
  const post = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true, image: true },
      },
    },
  });
  const stories: StoryItem[] = post.map(p => {
    return {
      id: p.id,
      url: p.cover,
      title: p.title,
      desc: p.desc,
      author: {
        name: p.author?.name || 'no name',
        image: p.author?.image || 'no image',
      },
    }
  })
  return stories
}

export default async function Stories() {
  const stories = await getData()
  return (
    <div className="px-3 grid gap-4 grid-cols-2">
      {
        stories.map(story => <Story key={story.id} story={ story }></Story>)
      }
    </div>
  )
}

export function Story({ ...props }: { story: StoryItem })  {
  const { story } = props
  return (
    <a
      href={ `/story/${story.id}`}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow">
      <Image
        className="object-cover w-full rounded-t-lg h-32"
        src={ story.url }
        alt={ story.title }
        width={ 196 }
        height={ 132 }
      />
      <div className="flex flex-col justify-between p-2 leading-normal">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900">{ story.title }</h5>
        <div className="flex">
          <p className="mb-3 text-xs font-normal text-gray-700">{ story.desc }</p>
          <Image
            width={ 32 }
            height={ 32 }
            className="w-8 h-8 rounded-full"
            alt=""
            src={ story.author.image }
          >
          </Image>
        </div>
      </div>
    </a>
  )
}