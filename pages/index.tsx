import Intro from "../component/intro/Intro"
import {Item, RecipesProps} from "../component/item"
import { Header } from "../component/header"
import Link from "next/link"

export const getStaticProps = async () => {
  try {
    // const responce = await fetch(`${process.env.API_HOST}/recipes`)
    const responce = await fetch('http://localhost:3000/api/recipes')
    const recipes = await responce.json()

    if(!recipes) {
      return {
        notFound: true
      }
    }

    return {
      props: {recipes}
    }
  } catch {
    alert('something is wrong')
  }
}

  const Home = ({recipes}) => (
    <>
      <Header/>
      <Intro/>
      <div className="container">
        <Link href={'/breakfast'}>
          <h1 className="heading__title">Go there!</h1>
        </Link>
        <section className="heading">
          {
           recipes && 
           recipes.map((obj: RecipesProps) => (
            <Item {...obj} key={obj.id}/> 
          ))
          }
        </section>
      </div>
    </>
  )

export default Home