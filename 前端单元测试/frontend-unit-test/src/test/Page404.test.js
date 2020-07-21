import {shallow} from 'enzyme';
import React from 'react';
import Page404 from '../components/Page404';
// import {describe, expect, it} from "@jest/globals";
import Adapter from 'enzyme-adapter-react-16';
import * as Enzyme from "enzyme";
Enzyme.configure({ adapter: new Adapter() })

describe('Page404', () => {
    it('Page404 shows "404"', () => {
        const app = shallow(<Page404/>);
        expect(app.find('div').text()).toEqual('404');
    });
});