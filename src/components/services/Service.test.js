import React from 'react';
import Service from './Service';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Service", () => {
  let props;
  let mountedService;
  const service = () => {
    if (!mountedService) {
      mountedService = mount(
        <Service {...props} />
      );
    }
    return mountedService;
  }

  beforeEach(() => {
    props = {
      headline: undefined,
      text: undefined,
      id: undefined,
    };
    mountedService = undefined;
  });

  // All tests will go here
  it('always renders a div', () => {
    const divs = service().find('div');
    expect(divs.length).toBeGreaterThan(0);
  })

  /*it('should render', () => {
    const serviceComponent = shallow(<Service />);
    const tree = toJSON(serviceComponent);
    expect(tree).toMatchSnapshot();
  })*/


  it('set the state of the component using promises', () => {
    expect(service().state('active')).toEqual(false)
    //expect(service().props().isVisible).toEqual(true)
    //expect(service().find('div').hasClass('invisible')).toEqual(true);

    // This tests if the state changes. But the class is not set with state!
    return new Promise((resolve) => {
      service().setState({ active: true }, () => {
        resolve();
      });
    }).then(() => {
      service().update();
      expect(service().state('active')).toEqual(true);
      //expect(service().props().active).toEqual(false);
    });

  });

  describe("when `headline` is defined", () => {
    beforeEach(() => {
      props.headline = "A test service"
    });
    it('renders a h4 headline', () => {
      expect(service().find('h4').length).toBe(1);
    })
    it("passes 'headline' to the rendered h4", () => {
      expect(service().find('h4').text()).toBe(props.headline);
    });
  });

  describe("when `headline` is undefined", () => {
    beforeEach(() => {
      props.headline = undefined;
    });
    it("No h4 should be rendered", () => {
      expect(service().find('h4').exists()).toEqual(false);
    });
  });

  describe("when 'text' prop is defined", () => {
    beforeEach(() => {
      props.text = "A text paragraph"
    });
    it('renders a paragraph', () => {
      expect(service().find('p').length).toBe(1);
    })
    it("passes 'text' prop to the rendered p", () => {
      expect(service().find('p').text()).toBe(props.text);
    });
  });

  describe("when 'text' prop is undefined", () => {
    beforeEach(() => {
      props.text = undefined;
    });
    it("No p should be rendered", () => {
      expect(service().find('p').exists()).toEqual(false);
    });
  });

});
