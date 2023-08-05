import { Menu, Button, Text, createStyles, rem } from "@mantine/core";
import {
  IconEdit,
  IconFaceId,
  IconBox,
  IconFileSpreadsheet,
  IconSchool,
  IconCertificate,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: theme.colors.blue,
    paddingTop: rem(10),
  },
}));

const EditSectionButton: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Menu width={200} classNames={{ item: classes.button }}>
      <Menu.Target>
        <Button rightIcon={<IconEdit size={14} />}>Edit section</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label style={{ fontSize: 30 }}>Edit sections</Menu.Label>
        <Menu.Item icon={<IconFaceId size={14} />}>Personal details</Menu.Item>
        <Menu.Item icon={<IconBox size={14} />}>Skills</Menu.Item>
        <Menu.Item icon={<IconFileSpreadsheet size={14} />}>
          Work experience
        </Menu.Item>
        <Menu.Item icon={<IconSchool size={14} />}>
          Educational history
        </Menu.Item>
        <Menu.Item icon={<IconCertificate size={14} />}>
          Certification
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default EditSectionButton;
