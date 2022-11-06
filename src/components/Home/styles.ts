import styled from 'styled-components'

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80vh;

    @media only screen and (max-width: 600px) {
        height: 30vh;
    }
`