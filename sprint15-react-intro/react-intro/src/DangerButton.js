import React from 'react';
 // Import a component from another file
import Button from './Button';

class DangerButton extends React.Component {
  render() {
    return <Button color="red" name="Nu ma apasa!" />;
  }
}

export default DangerButton;