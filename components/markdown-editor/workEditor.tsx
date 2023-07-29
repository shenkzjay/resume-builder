import React from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/states/store";
import { buttonList } from "suneditor-react";
import { updateObjective } from "@/states/reducers/slice/textUpdateSlice";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const WorkEditorFile = () => {
  const dispatch = useDispatch();

  const handleDetailInputChange = (content: string) => {
    dispatch(updateObjective(content));
  };

  return (
    <div>
      <SunEditor
        placeholder="we global"
        onChange={handleDetailInputChange}
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
              "subscript",
              "superscript",
              "removeFormat",
            ],

            [
              "fontColor",
              "hiliteColor",
              "outdent",
              "indent",
              "align",
              "horizontalRule",
              "list",
              "table",
            ],
            "/",
          ],
        }}
      />
    </div>
  );
};
export default WorkEditorFile;
