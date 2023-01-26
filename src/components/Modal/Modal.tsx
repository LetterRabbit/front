import { Modal } from "antd";
import styled from "styled-components";
import { Fragment } from "react";

interface MODAL_DATA {
  title: string | undefined;
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  children?: React.ReactNode;
}

const ModalButton = ({ children, ...props }: MODAL_DATA) => {
  return (
    <Fragment>
      <ModalStyled {...props} />
    </Fragment>
  );
};

export default ModalButton;

const ModalStyled = styled(Modal)`
  .ant-modal-content,
  .ant-modal-title {
    background-color: #3d3d3d;
  }

  .ant-modal-content {
    width: 300px;
    left: 50%;
    margin-top: 50%;
    transform: translate(-50%, 0);
    padding: 24px;
    text-align: center;
  }

  .ant-modal-title {
    padding-bottom: 24px;
    color: #fff;
  }

  .ant-modal-footer {
    text-align: center;
  }

  .ant-modal-close-x {
    display: none;
  }

  .ant-btn.css-dev-only-do-not-override-sk7ap8.ant-btn-default {
    background-color: #666;
    color: #fff;
    border: transparent;
    margin-right: 10px;
  }

  .ant-btn.css-dev-only-do-not-override-sk7ap8.ant-btn-primary {
    background-color: #fe5d56;
  }
`;
