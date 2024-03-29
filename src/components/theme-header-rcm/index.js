import React, { memo } from 'react';
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { HeaderWrapper } from "./style";

const YBThemeHeaderRCM = memo(function YBThemeHeaderRCM(props) {
    const { title, keywords, moreLink } = props;
    return (
        <HeaderWrapper className="sprite_02">
            <div className="left">
                <h3 className="title">{title}</h3>
                <div className="keyword">
                    {
                        keywords.map(item => {
                            return (
                                <div className="item" key={item}>
                                    <span className="link">{item}</span>
                                    <span className="divider">|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right">
                <Link to={moreLink}>更多</Link>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
})

YBThemeHeaderRCM.defaultProps = {
    keywords: []
}

YBThemeHeaderRCM.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}

export default YBThemeHeaderRCM;
