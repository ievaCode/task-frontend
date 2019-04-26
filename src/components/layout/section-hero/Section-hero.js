import React from 'react';

import Header from "../header/Header";
import PromoInfo from "../../layout/section-hero/promo-info/Promo-info";
import PromoPic from "../../layout/section-hero/promo-pic/Promo-pic";
import AdvantageList from "../../layout/section-hero/advantage-list/Advantage-list";

import photo from '../../../assets/background-flipc.jpg'


class SectionHero extends React.Component {
    render() {
        return (
            <section className="section-hero section-hero--home-page" style={{backgroundImage: `url(${photo})`}}>
                <Header/>
                <div className="section-hero__main">
                    <div className="container">
                        <div className="section-hero__wrapper">
                            <div className="section-hero__side-container section-hero__side-container--right">
                                <PromoPic/>
                            </div>
                            <div className="section-hero__side-container section-hero__side-container--left">
                                <PromoInfo/>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <AdvantageList/>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionHero