import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
  disableLifeCycleMethods: true // Don't run these except when explicitly told so
});
