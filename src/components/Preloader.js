import React from 'react';

class Preloader extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="preloader">
                    <div className="centrize full-width">
                        <div className="vertical-center">
                            <div className="spinner">
                                <div className="double-bounce1"></div>
                                <div className="double-bounce2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Preloader;