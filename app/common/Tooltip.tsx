import * as React from "react";
import classNames from "classnames";
const styles: any = require("./Tooltip.scss");

interface ITooltipProps extends React.Props<any> {
    className?: string;
    style?: any;
}

export default class Tooltip extends React.Component<ITooltipProps, {}> {
    public render() {
        const {children, className, style} = this.props;
        return <div className={classNames(styles.tooltip, className)}
            style={style}>
            {children}
        </div>;
    }
}
