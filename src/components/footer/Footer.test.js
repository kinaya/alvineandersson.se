import React from 'react';
import Footer from './Footer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Footer", () => {
  let props;
  let mountedFooter;
  const footer = () => {
    if (!mountedFooter) {
      mountedFooter = mount(
        <Footer {...props} />
      );
    }
    return mountedFooter;
  }

  beforeEach(() => {
    props = {
      //wallpaperPath: undefined,
      //userInfoMessage: undefined,
      //onUnlocked: undefined,
    };
    mountedFooter = undefined;
  });

  // All tests will go here
  it('always renders a div', () => {
    const divs = footer().find('div');
    expect(divs.length).toBeGreaterThan(0);
  })

  // It displayes a h2 headline
  it('always renders a h2 headline', () => {
    expect(footer().find('h2').length).toBe(1);
  })

  // The Footer does not receive any props
  it('does not receive any props', () => {
    expect(Object.keys(footer().props()).length).toBe(0);
  })

});
