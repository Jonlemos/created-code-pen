import React from 'react'
import styled from 'styled-components'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled} from 'react-codemirror2'

const Editor = ({displayName, language, value, onChange}) => {


    const handleChange = (editor, data, value) =>{
        onChange(value)
    }
    return (
        <>
            <ContainerEditor>
                <NameEditor>
                    {displayName}
                </NameEditor>
                <ControlledEditor
                    onBeforeChange={handleChange}
                    value={value}
                    options={{
                        lineWrapping:true,
                        lint: true,
                        mode:language,
                        lineNumbers:true,
                        theme:'material'
                    }}
                />
            </ContainerEditor>
        </>
    )
}

const ContainerEditor = styled.div`
    flex-grow: 1;
    display:flex;
    flex-direction: column;
    padding: 15px;

`
const NameEditor = styled.div`
    display: flex;
    justify-content: space-between;
    background-color:#004d33;
    padding: 5px 5px 5px 10px;
    border-radius: 15px 15px 0 0;
`
const ControlledEditor = styled(Controlled)`
    flex-grow: 1;
    border-radius: 0 0 10px 10px;
    overflow: hidden

`


export default Editor;
