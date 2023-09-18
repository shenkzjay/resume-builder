import { Modal } from "@mantine/core";

interface ModalProps {
  open: () => void;
  close: () => void;
  opened: boolean;
  children: React.ReactNode;
}

export function ModalCard({ opened, close, open, children }: ModalProps) {
  // const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="max-h-24">
      <Modal opened={opened} onClose={close} title="Preview template" centered>
        {children}
      </Modal>

      {/* <Group position="center">
        <Button onClick={open}>Open centered Modal</Button>
      </Group> */}
    </div>
  );
}
