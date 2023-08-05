import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";
import Typography from "@tiptap/extension-typography";
import HardBreak from "@tiptap/extension-hard-break";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/states/store";

interface TipTapProps {
  content: string;
  onUpdate: (content: any) => void;
}

function TiptapEditor({ content, onUpdate }: TipTapProps) {
  // const dispatch = useDispatch();

  // const updateObjectiveText = useSelector(
  //   (state: RootState) => state.updateTextName.objective
  // );

  // console.log("content", updateObjectiveText);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      Typography,
      SubScript,
      HardBreak,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content,
    onUpdate: ({ editor }) => {
      const updatedContent = editor.getHTML(); // Get the HTML content of the editor
      onUpdate(updatedContent); // Pass the updated content to the onUpdate function
    },

    editorProps: {
      attributes: {
        class: "prose prose-list-disc whitespace:pre-wrap",
      },
    },
  });

  return (
    <RichTextEditor editor={editor}>
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}

export default TiptapEditor;
