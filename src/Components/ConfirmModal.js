import { Modal } from 'antd';

const { confirm } = Modal;

/**
 * @description A modal which confirms the action performed
 * @param {*} text string to be displayed as a title of the modal
 * @param {*} okayHandler function which is called when "ok" button is clicked
 * @param {*} cancelHandler function which is called when "cancel" button is clicked
 * @param {*} e event that is triggered to enable this modal
 * @param {*} record
 */
export function Message(text, okayHandler, cancelHandler, e, record) {
  confirm({
    title: text,
    onOk: () => {
      okayHandler(record, e);
    },
    onCancel: () => {
      cancelHandler(record, e);
    },
  });
}

export default Message;