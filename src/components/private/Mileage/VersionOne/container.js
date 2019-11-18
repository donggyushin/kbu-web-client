import React from 'react';
import Presenter from './presenter';

class Container extends React.Component {

    render() {
        const { rows, loading } = this.props;
        return <Presenter rows={rows}
            loading={loading} />
    }
}

export default Container