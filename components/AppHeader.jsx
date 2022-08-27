import React from "react";
import styled from "styled-components";
import { Input } from "antd";
import useWidth from "../hooks/useWidth";

const Cover = styled.article`
    width: 100%;
    height: 50px;

    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0px 10px;
`;

const HeaderInput = styled(Input)`
    width: ${(props) => props.w};
    height: 35px;
`;

const AppHeader = () => {

    const width = useWidth();

    console.log(width);

    return (
        <Cover>
            <div>asdfsadfs</div>
            <HeaderInput 
                size="small" 
                w={width < 800 ? "200px" : "400px"} 
                allowClear 
                placeholder="검색어를 입력하세요....">
            </HeaderInput>
            <div>asdfsadfs</div>
        </Cover>
    )
};

export default AppHeader;