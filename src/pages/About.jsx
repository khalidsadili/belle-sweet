import React from 'react';
import './About.css';
import logo from '../assets/logo.png';

const About = () => {
    return (
        <div className="about-page container">
            <div className="about-content">
                <div className="about-text">
                    <h1 className="section-title">قصتنا</h1>
                    <p className="story-text">
                        بدأت رحلة <strong>بيلا سويتس</strong> في ظل تحديات جائحة كورونا، من شغف بسيط لطالبة جامعية عشقت فن صناعة الحلويات.
                        ما كان مجرد تجارب منزلية صغيرة، تحول برغبة صادقة في نشر السعادة إلى مشروع يلامس القلوب.
                        <br /><br />
                        قررنا مشاركة وصفاتنا الخاصة والمميزة، لنقدم لكم أكثر من مجرد حلوى؛ نحن نقدم تجربة تغمر حواسكم بالمتعة والدفء.
                        في بيلا سويتس، نؤمن بأن كل قطعة تُصنع بحب، لتصل إليكم محملة بنكهات لا ت=نسى ولحظات من الفرح الخالص.
                    </p>
                </div>
                <div className="about-image">
                    <div className="image-frame">
                        <img src={logo} alt="قصة بيلا سويتس" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
