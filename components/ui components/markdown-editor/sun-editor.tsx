import React, { memo } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

interface SunEditorProps {
  placeholder: string;
  value: string;
  onChange: (content: string) => void;
}

const SunEditorFile: React.FC<SunEditorProps> = memo(
  ({ placeholder, onChange, value }) => {
    const handleDetailInputChange = (content: string) => {
      onChange(content);
    };

    return (
      <div>
        <SunEditor
          placeholder={placeholder}
          onChange={handleDetailInputChange}
          setContents={value}
          setOptions={{
            height: "auto",
            minHeight: "100px",
            buttonList: [
              [
                "undo",
                "redo",
                "bold",
                "underline",
                "italic",
                "strike",
                "outdent",
                "indent",
                "align",
                "list",
              ],
            ],
          }}
        />
      </div>
    );
  }
);
export default SunEditorFile;
