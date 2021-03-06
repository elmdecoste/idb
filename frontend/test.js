import React from 'react';
import { expect, assert } from 'chai';
import Enzyme from 'enzyme';
import { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import App from './src/components/App/App';
import Home from './src/components/Home/Home';
import RSAboutPage from './src/components/RSAboutPage/RSAboutPage';
import RSContainer from './src/components/RSContainer/RSContainer';
import RSLink from './src/components/RSLink/RSLink';
import RSRedditCard from './src/components/RSRedditCard/RSRedditCard';
import RSTeamMember from './src/components/RSTeamMember/RSTeamMember';
import RSTool from './src/components/RSTool/RSTool';
import RSVideoCard from './src/components/RSVideoCard/RSVideoCard';
import RSVideoDetailPage from './src/components/RSVideoDetailPage/RSVideoDetailPage';
import SkillDetailPage from './src/components/SkillDetailPage/SkillDetailPage';
import ItemDetailPage from './src/components/SkillDetailPage/SkillDetailPage';
import GitHubStats from './src/components/SkillDetailPage/SkillDetailPage';
import CommunityGrid from './src/components/SkillDetailPage/SkillDetailPage';

// App
describe('<App/>', function () {
    it('should render successfully', function () {
        shallow(<App />);
    });
    it('should render the navigation bar', function () {
        const wrapper = shallow(<App />);
        const navbar = wrapper.find('Nav');
        expect(navbar.exists()).to.equal(true);
    });
    it('should have 5 navigation items', function () {
        const wrapper = shallow(<App />);
        const tabs = wrapper.find('Nav').children();
        expect(tabs).to.have.length(5);
    });
});

// Home
describe('<Home/>', () => {
    it('should render successfully', function () {
        shallow(<Home />);
    });
    it('should render the carousel item', function () {
        const wrapper = shallow(<Home />);
        const carousel = wrapper.find('Carousel');
        expect(carousel.exists()).to.equal(true);
    });
    it('should render 3 carousel images', function () {
        const wrapper = shallow(<Home />);
        const carousel = wrapper.find('Carousel');
        expect(carousel.find('img')).to.have.length(3);
  })
});

// RSAboutPage
describe('<RSAboutPage/>', function () {
    it('should render successfully', function () {
        shallow(<RSAboutPage />);
    });
});

// RSContainer
describe('<RSContainer/>', function () {
    it('should render successfully', function () {
        shallow(<RSContainer />);
    });
});

// RSLink
describe('<RSLink/>', function () {
    it('should render successfully', function () {
        shallow(<RSLink />);
    });
});

// RSRedditCard
describe('<RSRedditCard/>', function () {
    it('should render successfully', function () {
        shallow(<RSRedditCard />);
    });
});

// RSTeamMember
describe('<RSTeamMember/>', function () {
    it('should render successfully', function () {
        shallow(<RSTeamMember />);
    });
});

// RSTool
describe('<RSTool/>', function () {
    it('should render successfully', function () {
        shallow(<RSTool />);
    });
});

// RSVideoCard
describe('<RSVideoCard/>', function () {
    it('should render successfully', function () {
        shallow(<RSVideoCard />);
    });
});
