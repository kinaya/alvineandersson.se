import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import PropTypes from 'prop-types'

class JumpingTitle extends React.Component {

  state = {visibilitySensorActive: false}

  onChangeVisibility = isVisible => {
    this.setState({visibilitySensorActive: isVisible})
  }

  render() {

    const { title } = this.props;

    return (
      <VisibilitySensor
        onChange={this.onChangeVisibility}
        active={!this.state.visibilitySensorActive}
        partialVisibility={true} >
        {({isVisible}) =>

          <h2 data-test="jumping-title-component" className={isVisible ? 'jumpingTitle visible' : 'jumpingTitle invisible'}>
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

JumpingTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default JumpingTitle;
