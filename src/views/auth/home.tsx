import { FC } from "react"
import Layout from "../../layout"

import comingSoonImg from "@/assets/Coming_Soon.png"

const Home: FC = () => {

  return (
    <>
      <Layout>
        <div className="w-full  p-8 mt-10">
          <h1 className="text-3xl font-bold">
            Home
          </h1>
          <div className="flex justify-center">
            <img src={comingSoonImg} alt="Coming Soon" />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
