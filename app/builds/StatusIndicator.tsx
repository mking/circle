import * as React from "react";
import StatusType from "./StatusType";
import classNames from "classnames";
const styles: any = require("./StatusIndicator.scss");

interface IStatusIndicatorProps extends React.Props<any> {
    className?: string;
    status: StatusType;
}

export default class StatusIndicator extends React.Component<IStatusIndicatorProps, {}> {
    public render() {
        const {className, status} = this.props;
        const icons: any = {
            [StatusType.SUCCESS]: "fa-check",
            [StatusType.CANCELLED]: "fa-minus",
            [StatusType.FAILED]: "fa-exclamation",
            [StatusType.RUNNING]: "fa-ellipsis-h"
        };
        return <div className={classNames(styles.status, styles[`status--${StatusType[status]}`], className)}>
            <i className={classNames(styles.icon, "fa", icons[status])}/>
        </div>;
    }
}

