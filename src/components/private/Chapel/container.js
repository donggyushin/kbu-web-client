import React from 'react';
import ChapelPresenter from './presenter';



class ChapelContainer extends React.Component {


    render() {
        const { chapels, summary, chapelLength, loading } = this.props.chapel;

        return <ChapelPresenter loading={loading} chapelLength={chapelLength} summary={summary} chapels={chapels} />
    }

}

export default ChapelContainer;