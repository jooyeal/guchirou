import { Box, Button, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useRef, useState } from "react";
import { db } from "../service/firebase";
import { ref, onValue } from "firebase/database";
import "firebase/auth";
type Post = {
  id: string;
  content: string;
};
type Props = {
  posts: any;
};
const Home: React.FC<Props> = ({ posts }) => {
  const postsRef = useRef<HTMLDivElement>(null);
  const [showNew, setShowNew] = useState<boolean>(false);
  const [updated, setUpdated] = useState<boolean>(false);

  const postsData = ref(db, "posts/");
  // onValue(postsData, (snapshot) => {
  //   if (snapshot.exists()) {
  //     const data = snapshot.val();
  //     const original = Object.keys(data).map((key) => ({
  //       id: key,
  //       content: data[key]["content"],
  //     }));
  //     // setPosts(original.reverse());
  //   } else {
  //     console.log(snapshot);
  //     console.log("no data");
  //   }
  // });

  const onScroll = (e: any) => {
    if (e.target.scrollTop !== 0) setShowNew(true);
    else setShowNew(false);
  };

  const onClick = (e: any) => {
    if (postsRef.current)
      postsRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box>
      <Head>
        <title>グチロウ</title>
        <meta name="description" content="一緒に愚痴ろう" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Flex justifyContent="center">
        <Box
          ref={postsRef}
          onScroll={onScroll}
          style={{ height: "600px" }}
          className="overflow-y-scroll no-scrollbar p-2"
        >
          {showNew && (
            <Box className="fixed left-2/3">
              <Button colorScheme="twitter" size="sm" onClick={onClick}>
                トップへ
              </Button>
            </Box>
          )}
          {posts?.map((p: Post, i: any) => (
            <Card key={p.id} id={p.id} content={p.content} />
          ))}
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Home;

export function getServerSideProps() {
  let posts: any = [];
  const postsData = ref(db, "posts/");
  onValue(postsData, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const original = Object.keys(data).map((key) => ({
        id: key,
        content: data[key]["content"],
      }));
      posts = original.reverse();
    } else {
      console.log(snapshot);
      console.log("no data");
    }
  });
  return {
    props: {
      posts,
    },
  };
}
