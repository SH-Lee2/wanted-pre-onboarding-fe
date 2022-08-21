import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingSpinner = () => {
	return <SpinnerTag/>;
};

export default LoadingSpinner;

const rotate_spinner = keyframes`
    0% { 
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg);
    }
`;
const SpinnerTag = styled.div`
    position: absolute;
	top: 50%;
	left: 50%;
	border: 4px solid lightgray;
	border-top: 4px solid skyblue;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	animation: ${rotate_spinner} 1.5s linear infinite;
`;
