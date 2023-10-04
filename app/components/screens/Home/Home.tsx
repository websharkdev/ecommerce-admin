"use client";

import { Modal } from "@/components/ui/modal";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <Modal
      title="Title"
      onClose={() => {}}
      isOpen={true}
      description="Some descr"
    >
      Home Modal 123
    </Modal>
  );
};
