"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { Bold, Heading1, Heading2, List, ListOrdered, Quote, Image as ImageIcon, Link as LinkIcon, Table as TableIcon } from "lucide-react";

interface TipTapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function TipTapEditor({ content, onChange }: TipTapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const addImage = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png, image/jpeg, image/jpg, image/webp";
    input.onchange = async (e: any) => {
      const file = e.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        try {
          const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });
          const data = await res.json();
          if (data.url) {
            editor.chain().focus().setImage({ src: data.url }).run();
          }
        } catch (error) {
          console.error("Image upload failed", error);
        }
      }
    };
    input.click();
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const addFile = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/pdf, text/plain, .doc, .docx";
    input.onchange = async (e: any) => {
      const file = e.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        try {
          const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });
          const data = await res.json();
          if (data.url) {
            editor.chain().focus().setLink({ href: data.url }).insertContent(file.name).run();
          }
        } catch (error) {
          console.error("File upload failed", error);
        }
      }
    };
    input.click();
  };

  return (
    <div className="tiptap-editor-wrapper" style={{ border: "1px solid var(--border)", borderRadius: "4px", backgroundColor: "var(--background-alt)" }}>
      <div className="toolbar" style={{ display: "flex", gap: "0.5rem", padding: "0.5rem", borderBottom: "1px solid var(--border)", flexWrap: "wrap" }}>
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive("bold") ? "active" : ""} style={btnStyle}>
          <Bold size={16} />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive("heading", { level: 1 }) ? "active" : ""} style={btnStyle}>
          <Heading1 size={16} />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive("heading", { level: 2 }) ? "active" : ""} style={btnStyle}>
          <Heading2 size={16} />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive("bulletList") ? "active" : ""} style={btnStyle}>
          <List size={16} />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive("orderedList") ? "active" : ""} style={btnStyle}>
          <ListOrdered size={16} />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive("blockquote") ? "active" : ""} style={btnStyle}>
          <Quote size={16} />
        </button>
        <button type="button" onClick={setLink} className={editor.isActive("link") ? "active" : ""} style={btnStyle}>
          <LinkIcon size={16} />
        </button>
        <button type="button" onClick={addImage} style={btnStyle}>
          <ImageIcon size={16} />
        </button>
        <button type="button" onClick={addFile} style={btnStyle}>
          <span style={{ fontSize: "12px", fontWeight: "bold" }}>PDF</span>
        </button>
        <button type="button" onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} style={btnStyle}>
          <TableIcon size={16} />
        </button>
      </div>
      <div style={{ padding: "1rem", minHeight: "300px", color: "var(--foreground)" }}>
        <EditorContent editor={editor} />
      </div>
      <style>{`
        .tiptap-editor-wrapper .toolbar button {
          padding: 0.5rem;
          background: transparent;
          border: 1px solid transparent;
          cursor: pointer;
          border-radius: 4px;
          color: var(--foreground-muted);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tiptap-editor-wrapper .toolbar button:hover {
          background: var(--border);
          color: var(--foreground);
        }
        .tiptap-editor-wrapper .toolbar button.active {
          background: var(--border);
          color: var(--foreground);
          border-color: var(--foreground-muted);
        }
        .ProseMirror {
          outline: none;
          min-height: 400px;
          padding: 1rem;
          border: 1px solid var(--border);
          border-radius: 4px;
          background-color: var(--background);
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ProseMirror:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
        }
        .ProseMirror p {
          margin-bottom: 1em;
        }
        .ProseMirror h1, .ProseMirror h2, .ProseMirror h3 {
          margin-top: 1.5em;
          margin-bottom: 0.5em;
        }
        .ProseMirror blockquote {
          border-left: 3px solid var(--border);
          padding-left: 1rem;
          margin-left: 0;
          color: var(--foreground-muted);
        }
        .ProseMirror img {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
        }
        .ProseMirror a {
          color: var(--accent);
          text-decoration: underline;
        }
        .ProseMirror table {
          border-collapse: collapse;
          table-layout: fixed;
          width: 100%;
          margin: 0;
          overflow: hidden;
        }
        .ProseMirror td, .ProseMirror th {
          min-width: 1em;
          border: 2px solid var(--border);
          padding: 3px 5px;
          vertical-align: top;
          box-sizing: border-box;
          position: relative;
        }
        .ProseMirror th {
          font-weight: bold;
          text-align: left;
          background-color: var(--background);
        }
      `}</style>
    </div>
  );
}

const btnStyle = {};
