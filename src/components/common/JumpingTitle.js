import React, { Component} from "react";
import VisibilitySensor from "react-visibility-sensor";

class JumpingTitle extends React.Component {

  constructor(props) {
    super(props)
    this.state = {visible: false}
    this.onChangeVisibility = this.onChangeVisibility.bind(this);
  }

  onChangeVisibility(isVisible) {
    this.setState({visible: isVisible})
  }

  render() {

    const { title } = this.props;

    return (
      <VisibilitySensor onChange={this.onChangeVisibility} active={!this.state.visible} partialVisibility={true} >
      {({isVisible}) =>

        <h2 className={isVisible ? 'jumpingTitle visible' : 'jumpingTitle invisible'}>
          {title.split('').map((letter, i) => {
            const delay = 0.1*i;
            const duration = 0.4 + 0.05*i;
            const style = {animationDuration: `${duration}s`, animationDelay: `${delay}s`}
            return (
              <span key={i} style={style}>{letter}</span>
            )
        })}
        </h2>


      }
      </VisibilitySensor>
    );
  }
}

export default JumpingTitle;
