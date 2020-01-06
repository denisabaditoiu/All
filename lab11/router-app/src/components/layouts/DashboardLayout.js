import React from 'react';

class DashboardLayout extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default DashboardLayout;