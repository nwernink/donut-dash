import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='beneficiary' onClick={toggle}>Beneficiary</SidebarLink>
                    <SidebarLink to='history' onClick={toggle}>History</SidebarLink>
                    <SidebarLink to='sponsors' onClick={toggle}>Sponsors</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='//pghdonutdash.crowdchange.co/20152'target="_blank">Sign Up</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;