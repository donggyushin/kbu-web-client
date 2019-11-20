import React from 'react'
import { Modal } from 'antd'

export default function (title, message) {
    Modal.info({
        title,
        content: (
            <div>
                <p>{message}</p>

            </div>
        ),
        onOk() { },
    });
}