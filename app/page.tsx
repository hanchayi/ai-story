import Carousel from '@/components/carousel'
import { Categories } from '@/components/categories'
import Header from '@/components/header'
import Navs from '@/components/navs'
import Search from '@/components/search'
import Stories from '@/components/stories'

export default function Home() {
  return (
    <main className="">
      <Header hideBack={ true }></Header>
      <section className='pt-20'>
        <Search></Search>
      </section>
      <section>
        <Carousel></Carousel>
      </section>
      <section>
        <Categories></Categories>
      </section>
      <section className='mt-3'>
        <Stories></Stories>
      </section>
      <footer className='fixed left-0 right-0 bottom-0'>
        <Navs></Navs>
      </footer>
    </main>
  )
}

