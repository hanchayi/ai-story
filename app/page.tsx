import Carousel from '@/components/carousel'
import Header from '@/components/header'
import Search from '@/components/search'

export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <section className='mt-20'>
        <Search></Search>
        <Carousel></Carousel>
      </section>
    </main>
  )
}

