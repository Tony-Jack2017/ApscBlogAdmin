import React, {FC, useState} from "react";
import {createEditor, Descendant} from "slate";
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
            children: [{ text: 'A line of text in a paragraph.' }],
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
                <Editable />
            </Slate>
        </div>
    )
}
export default TextEditor