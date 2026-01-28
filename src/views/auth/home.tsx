import { FC } from "react"
import Layout from "../../layout"

import CardSeason from "../cards/cardSeason";
import CardUpComing from "../cards/upComing";
// import CardCompleted from "../cards/completed";
import CardTops from "../cards/tops";
// import CardAnother from "../cards/another";

// import comingSoonImg from "@/assets/Coming_Soon.png"

const Home: FC = () => {

  return (
    <>
      <Layout>
        <div className="w-full p-8 mt-10 flex flex-col gap-16">
          <CardSeason />
          <CardUpComing />
          {/* <CardCompleted /> */}
          <CardTops />
          {/* <CardAnother /> */}
        </div>
      </Layout>
    </>
  );
}

export default Home
