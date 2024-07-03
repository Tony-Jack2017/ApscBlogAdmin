import React, {FC, useState} from "react";
import {createEditor} from "slate";
import { Slate, Editable, withReact } from 'slate-react'

type TextEditorProps = {
    title?: string
    onChange?: (content: string) => void
    initialValue?: string
}

const TextEditor:FC<TextEditorProps> = (props) => {

    const { initialValue, onChange } = props
    const [editor] = useState(() => withReact(createEditor()))
    const value = [
        {
            type: 'paragraph',
            children: [{ text: initialValue ? initialValue : "Some words i want to writing here" }],
        },
    ]
    const handleChange = (value:any) => {
        const isAstChange = editor.operations.some(
            op => 'set_selection' !== op.type
        )
        if (isAstChange) {
            const content = JSON.stringify(value)
            if (onChange) {
                onChange(content)
            }
        }
    }
    return (
        <div className="text-editor">
            <Slate editor={editor} initialValue={value} onChange={handleChange}>
                <Editable className="editor" style={{ minHeight: 500, outline: "none", padding: 16 }} />
            </Slate>
        </div>
    )
}
export default TextEditor