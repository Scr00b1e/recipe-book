import Intro from "../component/intro/Intro"
import {Item} from "../component/item"
import { Header } from "../component/header"

// export const getStaticProps = async (context) => {
//   try {
//     // const responce = await fetch(`${process.env.API_HOST}/recipes`)
//     const responce = await fetch('http://localhost:3000/api/recipes')
//     const data = await responce.json()

//     if(!data) {
//       return {
//         notFound: true
//       }
//     }

//     return {
//       props: {recipes: data}
//     }
//   } catch {
//     alert('something is wrong')
//   }
// }

  const Home = () => (
    <>
      <Header/>
      <Intro/>
      <div className="container">
        <h1 className="heading__title">Go there!</h1>
        <section className="heading">
          <Item/> 
        </section>
      </div>
    </>
  )

export default Home