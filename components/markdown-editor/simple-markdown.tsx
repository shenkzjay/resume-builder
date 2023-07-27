import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface SimpleMarkdownProps {
  value: string;
  onChange: (value: string) => void;
}

const SimpleMarkdown: React.FC<SimpleMarkdownProps> = ({ value, onChange }) => {
  return (
    <div>
      <SimpleMDE
        options={{
          spellChecker: false,
          sideBySideFullscreen: false,
        }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SimpleMarkdown;
