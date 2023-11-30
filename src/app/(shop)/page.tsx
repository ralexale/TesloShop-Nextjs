import { titleFont } from '@/config/fonts'
import Image from 'next/image'

export default function Home() {
  return (
  <section>
    <h1>hola mundo</h1>
    <p className={`${titleFont.className} font-bold `}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aut deleniti esse assumenda at consequuntur ducimus nisi nam corrupti suscipit cumque nihil, exercitationem sunt beatae delectus! Distinctio at ab temporibus!</p>
  </section>
  )
}
