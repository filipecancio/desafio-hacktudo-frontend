import styled from "styled-components";
import { mobile } from "../../../styles/generic/settings/Breakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Frame = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: var(--c-coal-1);

    &::-webkit-scrollbar {
        display: none;
    }

    @media ${mobile.large} {
        width: 375px;
        height: 90%;
        max-height: 812px;
        border: 10px solid var(--c-coal-2);
        box-shadow: 0px 0px 15px 8px var(--c-coal-2o5);
        border-radius: 30px;
        transition: 0.2s;
    }
`