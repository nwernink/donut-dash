import React from 'react';
import Icon1 from '../../images/historyleft.jpg';
import Icon2 from '../../images/history2021.jpg';
import Icon3 from '../../images/historyright.jpg';
import Icon4 from '../../images/history2019.jpg';
import Icon5 from '../../images/history2018.jpg';
import Icon6 from '../../images/history2017.jpg';
import Icon7 from '../../images/history2016.jpg';
import Icon8 from '../../images/history2015.jpg';
import Icon9 from '../../images/history2014.jpg';

import {
    HistoryContainer,
    HistoryH1,
    HistoryWrapper,
    HistoryCard,
    HistoryIcon,
    HistoryH2,
    HistoryP
} from './HistoryElements';

const History = () => {
    return (
        <HistoryContainer id="history">
            <HistoryH1>History of Donut Dash</HistoryH1>
            <HistoryWrapper>
                <HistoryCard>
                    <HistoryIcon src={Icon1} />
                    <HistoryH2>Looking For Your Times?</HistoryH2>
                    <HistoryP>See how you stack up against the competition! <br />
                        <a href="https://runsignup.com/Race/Results/52448#resultSetId-281040;perpage:100" rel="noreferrer" target="_blank">2021 Race Results</a> <br /> 
                        <a href="https://runsignup.com/Race/Results/52448#resultSetId-175489;perpage:100" rel="noreferrer" target="_blank">2019 Race Results</a> <br /> 
                        <a href="https://runsignup.com/Race/Results/52448#resultSetId-132729;perpage:100" rel="noreferrer" target="_blank">2018 Race Results</a> <br /> 
                        <a href="https://runsignup.com/Race/Results/52448#resultSetId-97177;perpage:100" rel="noreferrer" target="_blank">2017 Race Results</a></HistoryP>
                </HistoryCard>
                <HistoryCard>
                    <HistoryIcon src={Icon2} />
                    <HistoryH2>2021: The Return of a Great Tradition</HistoryH2>
                    <HistoryP>After a one-year hiatus due to the pandemic, Donut Dash 
                        2021 was an inspiring revamp of a decade’s old CMU tradition. 
                        Over 700 runners joined us as we were able to raise 
                        $45,000 for the Austin’s Playrooms Initiative as we saw 
                        the inaugural Munchkin Mile.</HistoryP>
                </HistoryCard>
                <HistoryCard>
                    <HistoryIcon src={Icon3} />
                    <HistoryH2>Want To Explore Some Cool Photos?</HistoryH2>
                    <HistoryP>Check out the action from past Donut Dash races! <br />
                    <a href="https://www.flickr.com/photos/183397121@N03/" rel="noreferrer" target="_blank">2018 and 2019 Photos</a> <br />
                    <a href="https://photos.google.com/share/AF1QipN3x1oz9J2lrG_sYOwE4Wu9jb9kz6F14tFgrNLwT9NxRy-1BXPhgTApFz4bnw4qAw?key=YjgxQ01QUGxPcVhEZUxFM1RpV2xoZERYdUluWDZB" rel="noreferrer" target="_blank">2017 Photos</a> <br />
                    <a href="https://photos.google.com/share/AF1QipODwtSdkhLgYx61zqVFAtyDUa0ayVhinzULIa7B4BKgUOVztGANHzG6vZ5WW8mTdA?key=NzFDZGd5RUtaaVZoMm96LWJwcjZoYTEzQVNtMTJ3" rel="noreferrer" target="_blank">2016 Photos</a> <br />
                    <a href="https://www.flickr.com/photos/136411420@N05/albums" rel="noreferrer" target="_blank">2015 Photos</a> <br />
                    </HistoryP>
                </HistoryCard>

                <HistoryCard>
                    <HistoryIcon src={Icon4} />
                    <HistoryH2>2019: A Perfect Day For Fun</HistoryH2>
                    <HistoryP>With over 1,200 runners and $85,000 raised for the 
                        Austin’s Playrooms Initiative, Donut Dash 2019 was another 
                        smashing success! We were happy to continue our partnership 
                        with the Mario Lemieux Foundation and see the smiles on the 
                        faces of all of the participants.</HistoryP>
                </HistoryCard>
                <HistoryCard>
                    <HistoryIcon src={Icon5} />
                    <HistoryH2>2018: The 10th Anniversary</HistoryH2>
                    <HistoryP>Donut Dash 2018 was a huge success. We had an 
                        incredible time celebrating 10 years of Donut Dash! In 
                        the first year of our partnership with the Mario Lemieux 
                        Foundation, we were able to raise over $77,000 for the 
                        Austin’s Playrooms Initiative.</HistoryP>
                </HistoryCard>
                <HistoryCard>
                    <HistoryIcon src={Icon6} />
                    <HistoryH2>2017: Even More Record Breaking</HistoryH2>
                    <HistoryP>In the year of Alumni Advisor and 
                        inspiration Bob Dax's passing, we saw over 1,400 
                        participants and were able to raise over $200,000 in his 
                        honor. With your help, we also broke our 
                        own record for the largest amount of money raised by an 
                        individual greek organization.</HistoryP>
                </HistoryCard>

                <HistoryCard>
                    <HistoryIcon src={Icon7} />
                    <HistoryH2>2016: Record Smashing Year</HistoryH2>
                    <HistoryP>We raised more money than ever before for the Live 
                        Like Lou Center for ALS Research. We completed our goal 
                        of $500,000 over five years raised $176,000 in honor of 
                        our hero, Alumni Advisor Bob Dax. This is more than any 
                        individual greek organization has ever raised before!</HistoryP>
                </HistoryCard>
                <HistoryCard>
                    <HistoryIcon src={Icon8} />
                    <HistoryH2>2015: Move To Schenley Park</HistoryH2>
                    <HistoryP>Donut Dash 2015 took place in Schenley Plaza in 
                        Oakland for the first time ever, and it was a huge 
                        success! The new route around the plaza and down to 
                        Phipps Conservatory was fresh and exciting. 2015 was 
                        the first year that we featured a donut eating 
                        competition, which was great fun for everyone!</HistoryP>
                </HistoryCard>
                <HistoryCard>
                    <HistoryIcon src={Icon9} />
                    <HistoryH2>2014: 6,600 Donuts Endless Fun</HistoryH2>
                    <HistoryP>Centered at the Morewood Gardens parking lot on 
                        Carnegie Mellon's campus, featured a new route along 
                        Morewood and Forbes Avenues as well as live music. We 
                        made sure everyone was provided with their daily nutritional 
                        value of donuts (that's a thing, right?) with everyone
                        six donuts heavier!</HistoryP>
                </HistoryCard>
            </HistoryWrapper>
        </HistoryContainer>
    );
};

export default History;