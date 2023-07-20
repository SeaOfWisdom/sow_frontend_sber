import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
const ToastifyModal = styled.div`
  width: auto;
  position: absolute;
  top: 60px;
  transition: opacity 0.3s ease, transform 0.4s ease, visibility 0.3s;
  transform: translateY(${({ isActive }) => (isActive ? '0' : '-20px')});
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  & .toast {
    display: flex;
    align-items: center;
    padding: 26px 38px;
    background: #ffffff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    width: auto;
    & img {
      margin-right: 14px;
    }
    & span {
      font-family: 'Lora';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
      color: #2a2c35;
    }
  }
`;
const Toastify = ({ text = 'asdsd', toastList }) => {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  return (
    <ToastifyModal>
      <div className="toast">
        <img src="/img/vector.svg" alt="" />
        <span>{text}</span>
      </div>
    </ToastifyModal>
  );
};

export default Toastify;
