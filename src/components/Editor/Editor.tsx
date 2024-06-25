import React, {FC, useState} from "react";
import {createEditor} from "slate";
import { Slate, Editable, withReact } from 'slate-react'

type TextEditorProps = {
    title?: string
    getContent?: (content: string) => void
}

const TextEditor:FC<TextEditorProps> = (props) => {

    const { getContent } = props

    const [editor] = useState(() => withReact(createEditor()))
    const initialValue = [
        {
            type: 'paragraph',
            children: [{ text: 'Some words i want to writing here' }],
        },
    ]
    const onChange = (value:any) => {
        const isAstChange = editor.operations.some(
            op => 'set_selection' !== op.type
        )
        if (isAstChange) {
            const content = JSON.stringify(value)
            if (getContent) {
                getContent(content)
            }
        }
    }
    return (
        <div className="text-editor">
            <Slate editor={editor} initialValue={initialValue} onChange={onChange}>
                <Editable className="editor" style={{ minHeight: 500, outline: "none", padding: 16 }} />
            </Slate>
        </div>
    )
}
export default TextEditor