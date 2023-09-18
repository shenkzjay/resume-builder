import { Menu, Button, Text } from "@mantine/core";

interface ToggleButtonProps {
  onClick: () => void;
}

const ExportButton: React.FC<ToggleButtonProps> = ({ onClick }) => {
  return (
    <Menu width={200}>
      <Menu.Target>
        <Button>Export</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Export resume as</Menu.Label>
        <Menu.Item>
          <div onClick={onClick}> Pdf</div>
        </Menu.Item>
        <Menu.Item>Doc</Menu.Item>
        <Menu.Item>Plain text</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ExportButton;
