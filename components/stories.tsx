import Image from "next/image";

interface StoryItem {
  id: string | number;
  url: string;
  title: string;
  desc: string;
  author: string;
}

export default function Stories() {
  const stories: StoryItem[] = [
    {
      id: 1,
      url: "/story.png",
      title: "Spider Potter",
      desc: "Love, celebration, and a promise of forever.",
      author: "/story.png",
    },
    {
      id: 2,
      url: "/story.png",
      title: "Spider Potter",
      desc: "Love, celebration, and a promise of forever.",
      author: "/story.png",
    },
    {
      id: 3,
      url: "/story.png",
      title: "Spider Potter",
      desc: "Love, celebration, and a promise of forever.",
      author: "/story.png",
    },
    {
      id: 4,
      url: "/story.png",
      title: "Spider Potter",
      desc: "Love, celebration, and a promise of forever.",
      author: "/story.png",
    },
    {
      id: 5,
      url: "/story.png",
      title: "Spider Potter",
      desc: "Love, celebration, and a promise of forever.",
      author: "/story.png",
    },
  ]
  return (
    <div className="px-3 grid gap-4 grid-cols-2">
      {
        stories.map(story => Story(story))
      }
    </div>
  )
}

export function Story(story: StoryItem) {
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
            src={ story.author }
          >
          </Image>
        </div>
      </div>
    </a>
  )
}