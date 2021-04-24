import styled from 'styled-components'

export const EpisodeContainer = styled.li`
    background-color: var(--white);
    border: 1px solid var(--gray-100);
    padding: 1.25rem;
    border-radius: 1.5rem;
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    min-width: 430px;

    button{
        right: 2rem;
        bottom: 2rem;
        position: absolute;
        width: 2.5rem;
        height: 2.5rem;
        background-color: var(--white);
        border: 1px solid var(--gray-100);
        border-radius: 0.675rem;
        font-size: 0;
        transition: .2s;

        img {
            width: 1.5rem;
            height: 1.5rem;
        }

        &:hover{
            filter: brightness(.95);
        }
    }
`

export const EpisodeThumbnail = styled.div`
    min-width: 6rem;
    min-height: 6rem;

    img{
        width: 6rem;
        height: 6rem;
        border-radius: 1rem;
    }
`

export const EpisodeDetails = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-left: 1rem;
`

export const EpisodeTitle = styled.a`
    display: block;
    color: var(--gray-800);
    font-family: Lexend, sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.4rem;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const EpisodeMembers = styled.p`
    max-width: 16rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.875rem;
`

export const EpisodeTime = styled.div`
    display: flex;

    span {
        display: inline-block;
        margin-top: 0.5rem;
        font-size: 0.875rem;

        &:last-child {
            margin-left: 0.5rem;
            padding-left: 0.5rem;
            position: relative;
        }

        &::before{
            content: "";
            width: 4px;
            height: 4px;
            border-radius: 2px;
            background: #ddd;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
`