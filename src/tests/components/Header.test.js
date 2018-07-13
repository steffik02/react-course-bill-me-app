// import ReactShallowRenderer from "react-test-renderer/shallow";
//react test renderer allows us to render our compments inside of JS code and assert someting about what got rendered
import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';

test('should render header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('h1').text()).toBe('Bill.Me');

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});