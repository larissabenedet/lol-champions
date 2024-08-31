import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>LoL Champions</title>
        <meta
          name="description"
          content="Filter and search all League of Legends champions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          facilis facere delectus autem quo id.
        </div>
      </main>
    </>
  );
}
