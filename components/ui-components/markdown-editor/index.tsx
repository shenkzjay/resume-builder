import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Typography from "@tiptap/extension-typography";
import React from "react";
import TextBold from "@/components/svg/text-bold";
import TextItalic from "@/components/svg/text-italic";
import BulletList from "@/components/svg/bullet-list";
import NumberList from "@/components/svg/number-list";
import Undo from "@/components/svg/undo";
import Redo from "@/components/svg/redo";

interface TipTapProps {
  content: string;
  onUpdated: (content: any) => void;
}

type Editor = import("@tiptap/react").Editor;
type MenuBarProps = {
  editor: Editor | null;
};

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) {
    return null;
  }

  return (
    <section className=" justify-between bg-slate-100 p-2 flex flex-wrap">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "text-orange-600" : ""}
      >
        <TextBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "text-orange-600" : ""}
      >
        <TextItalic />
      </button>

      {/* <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
     
        <IconClearFormatting size={18} />
      </button> */}

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "text-orange-600" : ""}
      >
        <BulletList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "text-orange-600" : ""}
      >
        <NumberList />
      </button>

      {/* <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        <IconPageBreak size={18} />
      </button> */}
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <Undo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <Redo />
      </button>
    </section>
  );
};

// const updateWorkExp = useSelector(
//   (state: RootState) => state.updateTextName.workExperience
// );

const TiptapEditorNew = ({ onUpdated, content }: TipTapProps) => {
  console.log("editor is rendering");

  const editor = useEditor({
    extensions: [
      Typography,

      // Color.configure({ types: [TextStyle.name, ListItem.name] }),
      // TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    content,
    // autofocus: true,
    // editable: true,
    // injectCSS: false,
    onUpdate: ({ editor }) => {
      const updatedContent = editor.getHTML().replace(/<p><\/p>/g, "<br>"); // Get the HTML content of the editor
      onUpdated(updatedContent); // Pass the updated content to the onUpdate function
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="prose list-inside list-decimal"
        placeholder={content || "hippie"}
      />
    </div>
  );
};

export default TiptapEditorNew;
