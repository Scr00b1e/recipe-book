import Intro from "../component/intro/Intro"
import {Item} from "../component/item"

export const getStaticProps = async () => {
  try {
    const responce = await fetch(`${process.env.API_HOST}/recipes`)
    const data = await responce.json()

  if(!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {recipes: data}
  }
  } catch {
    return {
      props: {recipes: null}
    }
  }
}

  const Home = ({recipes}) => (
    <>
      <Intro/>
      <div className="container">
        <h1 className="heading__title">Go there!</h1>
        <section className="heading">
          <Item recipes={recipes}/>
        </section>
      </div>
    </>
  )

export default Home