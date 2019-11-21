import React from 'react'
import { Modal } from 'antd'

export default function (title, message, callback) {
    Modal.info({
        title,
        content: (
            <div>
                <p>{message}</p>
            </div>
        ),
        onOk() {
            if (callback) {
                callback()
            }
        },
    });
}