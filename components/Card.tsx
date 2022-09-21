import { Box, Button, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { db } from "../service/firebase";
import { push, ref, get } from "firebase/database";

type Props = {
  id: string;
  content: string;
};

const Card: React.FC<Props> = ({ id, content }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<{ content: string }>();

  useEffect(() => {
    const data = get(ref(db, "posts/" + id)).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        console.log("no data");
      }
    });
  }, []);

  return (
    <>
      <Box
        onClick={onOpen}
        style={{
          height: "80px",
        }}
        className="mb-4 w-80 rounded-md p-2 shadow-md font-bold line-clamp-3 select-none hover:shadow-lg cursor-pointer"
      >
        {content}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>こう叫ぶ</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{data?.content}</ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Card;
