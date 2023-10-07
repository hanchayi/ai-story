import Header from "@/components/header";
import Image from "next/image";

export default function Story({ params }: { params: { id: string }} ) {
  console.log('params', params)
  const story = {
    url: "/story.png",
  }

  return <div>
    <Header></Header>
    <Image
      src={ story.url }
      alt=""
      width={ 196 }
      height={ 132 }
    ></Image>
    <div className="flex">
      <h2>Goddess Maria</h2>
      <div>
        <Image
          src={"/story.png"}
          alt=""
          width={ 30 }
          height={ 30 }
        ></Image>
        <span>Fannings</span>
      </div>
    </div>
    <p>
      You find yourself in a vast celestial landscape,with the radiant figure of Goddess Maria shining brightly beyond the sun. Her golden aura illuminates the surroundings casting a warm light on the ethereal clouds that float in the sky.
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