import React from 'react';
import DocumentTitle from 'react-document-title';


export class Title extends React.Component {
  render() {
    var value = this.props.value;
    if (!value) {
      value = 'gitplaylist';
    } else {
      value += ' | gitplaylist';
    }

    return (
      <DocumentTitle title={value}>
        {this.props.children}
      </DocumentTitle>
    );
  }
}
