import { Modal } from 'antd';

const { confirm } = Modal;

export default function (title, content) {
    confirm({
        title: title,
        content,
        onOk() {
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                window.location.href = '/login'
            }).catch(() => console.log('Oops errors!'));
        },
        onCancel() { },
    });
}