import styled from "styled-components"

export const NotificationContainer = styled.div<{color: string}>`
    cursor: pointer;
    background-color: ${props => props.color};
    width: 100%;
    padding: 1.5em 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const IconNotification = styled.div`
    display: flex;
    border-radius: 50%;
    height: 3em;
    width: 3em;
    background-color: #F8F9FA;
    /* flex-shrink: 0; */
    align-items: center;
    justify-content: center;
`

export const NotificationText = styled.div`
    flex-grow: 1;
    margin-left: 1em;
`