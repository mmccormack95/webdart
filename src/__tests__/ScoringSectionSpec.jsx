import React from "react";
import {configure, shallow } from "enzyme";
import ScoringSection from "../main/Components/301/ThreeOhOneScoringSection";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({adapter: new Adapter()});

describe('ScoringSection', () => {
    it('should render ScoringSection', () => {
        const wrapper = shallow(<ScoringSection playerName='Player 1'/>);

        //test for flex to be center
        expect(wrapper.find('div').prop('style')).toEqual({display: 'flex', justifyContent: 'center'});
        expect(wrapper.find('h2').text()).toEqual('Player 1');
    });
});