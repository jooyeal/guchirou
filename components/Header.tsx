import { Button, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { db } from "../service/firebase";
import { push, ref } from "firebase/database";

type Props = {};

const Header: React.FC<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const content = e.target.content.value;
    if (content) {
      push(ref(db, "posts/"), {
        content,
      });
    }
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(onClose());
      }, 1000)
    );
  };
  return (
    <>
      <div className="flex items-center justify-center p-2 bg-gray-900 gap-6">
        <div className="flex justify-center">
          <Text className="text-2xl text-gray-200 font-serif">
            砕け散っちまえ世の中
          </Text>
        </div>
        <div>
          <Button size="sm" onClick={onOpen}>
            叫ぶ
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form method="POST" onSubmit={onSubmit}>
          <ModalContent>
            <ModalHeader>悩み事ある？</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Textarea
                name="content"
                className="resize-none"
                placeholder="俺も恋人欲しいな～～～～～(500文字まで）"
                rows={20}
                maxLength={500}
                required
              />
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                キャンセル
              </Button>
              <Button type="submit" colorScheme="blue">
                行け！
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default Header;
