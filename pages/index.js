import { Header } from "../component/header/index"
import Intro from "../component/intro/Intro"
import Item from "../component/item/Item"

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