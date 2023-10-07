import Carousel from '@/components/carousel'
import { Categories } from '@/components/categories'
import Header from '@/components/header'
import Search from '@/components/search'
import Stories from '@/components/stories'

export default function Home() {
  return (
    <main className="">
      <Header hideBack={ true }></Header>
      <section className='pt-20'>
        <Search></Search>
        <Carousel></Carousel>
        <Categories></Categories>
        <Stories></Stories>
      </section>
    </main>
  )
}

