import React from "react";
import Head from "next/head";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import List from "../components/List";

export default function Home() {
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const onSearch = async () => {
    const { data, error } = await axios.get("/api/google", {
      params: { search },
    });
    setData(data.results);
  };
  return (
    <>
      {/* <Appbar /> */}
      <Header search={search} setSearch={setSearch} onSearch={onSearch} />
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div
          style={{
            paddingTop: 170,
          }}
        >
          {data &&
            data.map((item, i) => {
              let photo = item.photos ? item.photos[0].photo_reference : "";
              return <List item={item} photo={photo} key={i} />;
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}
