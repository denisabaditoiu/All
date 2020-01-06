import React from 'react';
import { Route } from 'react-router-dom';


/**
 * Component used to encapsulate a route into a specific layout;
*/
class CustomRoute extends React.Component {
    
    /**
     * @attr props:
     * - Component - the component that neends to be rendered;
     * - Layout - the layout container that needs to be used;
     * - ...rest - rest params used for the Route component (exact, path);
    */
    render() {
        const { Component, Layout, ...rest } = this.props;
        return (
            <Route {...rest} render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}/>
        );
    }
}

export default CustomRoute;