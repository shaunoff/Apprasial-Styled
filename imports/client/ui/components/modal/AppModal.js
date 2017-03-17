import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';

const renderBodyFooter = ( body, footer) => (
  (
  <div>
    <div>
      { body }
    </div>
    <div>
      { footer }
    </div>
  </div>
));

class AppModal extends Component{

  handleClose(){
    this.props.modalClose()
  }
  render(){
    const {open,title, body, footer} = this.props
    return (
      <Dialog
              title={title}
              modal={false}
              open={this.props.open}
              onRequestClose={this.handleClose.bind(this)}
            >
              {renderBodyFooter( body, footer) }
      </Dialog>
    )
  }
}




AppModal.propTypes = {
  open: React.PropTypes.bool,
  title: React.PropTypes.string,
  body: React.PropTypes.node,
  footer: React.PropTypes.node,
};

export default AppModal;
