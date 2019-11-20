import React from 'react'

export default function ({ black }) {
    return <div class="spinner-border" style={{ color: black ? 'black' : 'white' }} role="status">
        <span class="sr-only">Loading...</span>
    </div>
}