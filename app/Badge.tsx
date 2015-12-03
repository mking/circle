import * as React from "react";
import StatusType from "./StatusType";
import classNames from "classnames";
const styles: any = require("./Badge.scss");

interface IBadgeProps {
    className?: string;
    status: StatusType;
}

export default class Badge extends React.Component<IBadgeProps, {}> {
    public render() {
        const {className, status} = this.props;
        const badgeStatuses: any = {
            [StatusType.SUCCESS]: StatusType.SUCCESS,
            [StatusType.FIXED]: StatusType.SUCCESS,
            [StatusType.CANCELLED]: StatusType.CANCELLED,
            [StatusType.FAILED]: StatusType.FAILED,
            [StatusType.TIMED_OUT]: StatusType.FAILED,
        };
        const badgeStatus = badgeStatuses[status];
        const icons: any = {
            [StatusType.SUCCESS]: "fa-check",
            [StatusType.CANCELLED]: "fa-minus",
            [StatusType.FAILED]: "fa-exclamation"
        };
        const texts: any = {
            [StatusType.SUCCESS]: "Success",
            [StatusType.FIXED]: "Fixed",
            [StatusType.CANCELLED]: "Cancelled",
            [StatusType.FAILED]: "Failed",
            [StatusType.TIMED_OUT]: "Timed out",
        };
        return <div className={classNames(styles.badge, styles[`badge--${StatusType[badgeStatus]}`], className)}>
            <div className={styles.status}>
                <i className={classNames(styles.icon, "fa", icons[badgeStatus])}/>
            </div>
            <span className={styles.text}>{texts[status]}</span>
        </div>;
    }
}
