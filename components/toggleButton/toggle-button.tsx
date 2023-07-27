import { Menu, Button, Text } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconLogout,
  IconPdf,
  IconPaperBag,
  IconLetterA,
  IconFileTypeTxt,
  IconFileTypeDoc,
  IconFileTypeTsx,
  IconFileTypePdf,
} from "@tabler/icons-react";

const ToggleButton = () => {
  return (
    <Menu width={200}>
      <Menu.Target>
        <Button rightIcon={<IconLogout size={14} />}>Export</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Export resume as</Menu.Label>
        <Menu.Item icon={<IconFileTypePdf size={14} />}>Pdf</Menu.Item>
        <Menu.Item icon={<IconFileTypeDoc size={14} />}>Doc</Menu.Item>
        <Menu.Item icon={<IconFileTypeTxt size={14} />}>Plain text</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ToggleButton;
