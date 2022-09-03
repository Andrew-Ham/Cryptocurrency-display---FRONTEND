import * as React from "react";
import * as PropTypes from "prop-types";

export default function Heading({children, level, ...restProps}) {
    let headingLevels = new Set([1,2,3,4,5,6]);
    let Element = "h1";

    if (headingLevels.has(level)) {
        Element = `h${level}`;
    }
    return <Element {...restProps}>{children}</Element>;
}
Heading.propTypes = {
    level: PropTypes.oneOf([1,2,3,4,5,6]),
    children: PropTypes.string,  //children can be string,list,object. This means we might think of using PropTypes.node but this causes an ERROR
                                //Therefore the purpose of documentation we want to use STRING
};