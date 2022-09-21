import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { db } from "../service/firebase";
import { push, ref, get } from "firebase/database";

type Props = {
  id: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const ContentModal: React.FC<Props> = ({ id, isOpen, onOpen, onClose }) => {
  useEffect(() => {
    const data = get(ref(db, "posts/" + id)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("no data");
      }
    });
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>悩み事ある？</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            キャンセル
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContentModal;
