import { IconArrowBackUpDouble } from "@tabler/icons-react";
import { IconArrowUpRightCircle } from "@tabler/icons-react";
import {
  IconBlockquote,
  IconBold,
  IconClearFormatting,
  IconItalic,
  IconListDetails,
  IconListNumbers,
  IconPageBreak,
  IconStrikethrough,
} from "@tabler/icons-react";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import { TextStyle } from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Typography from "@tiptap/extension-typography";
import React from "react";

// import HardBreak from "@tiptap/extension-hard-break";

interface TipTapProps {
  content: string;
  onUpdate: (content: any) => void;
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
    <section className="Proser bg-slate-100 p-2 ">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "text-orange-600" : ""}
      >
        <IconBold size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "text-orange-600" : ""}
      >
        <IconItalic size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "text-orange-600" : ""}
      >
        <IconStrikethrough size={18} />
      </button>

      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        {/* clear marks */}
        <IconClearFormatting size={18} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "text-orange-600" : ""}
      >
        <IconListDetails size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "text-orange-600" : ""}
      >
        <IconListNumbers size={18} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "text-orange-600" : ""}
      >
        <IconBlockquote size={18} />
      </button>

      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        <IconPageBreak size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <IconArrowBackUpDouble size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <IconArrowUpRightCircle size={18} />
      </button>
    </section>
  );
};

// const updateWorkExp = useSelector(
//   (state: RootState) => state.updateTextName.workExperience
// );

const TiptapEditorNew = ({ onUpdate, content }: TipTapProps) => {
  console.log("editor is rendering");

  const editor = useEditor({
    extensions: [
      Typography,
      ListItem,
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
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
      onUpdate(updatedContent); // Pass the updated content to the onUpdate function
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="prose list-inside list-decimal"
      />
    </div>
  );
};

export default TiptapEditorNew;
