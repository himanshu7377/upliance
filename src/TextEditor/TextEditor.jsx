import React, { useEffect, useRef, useState } from "react";
import styles from './TextEditor.module.css'
import JoditEditor from 'jodit-react';

export default function TextEditor({curruser}){
    const editor = useRef(null);
	const [content, setContent] = useState();
    console.log(curruser);
    useEffect(()=>{
        if(curruser){
            setContent(`
            Name : ${curruser.name},
            ID : ${curruser.id},
            Email : ${curruser.email},
            Address : ${curruser.Address},            
            Phone : ${curruser.phone},            
            `)
        }
    },[curruser])
    return (
        <div className={styles.textEditor}>
            <h1>Text Editor</h1>
            <JoditEditor
            ref={editor}
            value={content}
            onChange={text=>{setContent(text)}}
            className={styles.jeditor}
            />
        </div>
    )
}