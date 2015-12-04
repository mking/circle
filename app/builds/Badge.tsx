import * as React from "react";
import StatusIndicator from "./StatusIndicator";
import StatusType from "./StatusType";
import classNames from "classnames";
const styles: any = require("./Badge.scss");

interface IBadgeProps extends React.Props<any> {
    className?: string;
    status: StatusType;
}

export default class Badge extends React.Component<IBadgeProps, {}> {
    public render() {
        const {className, status} = this.props;
        const badgeStatus = StatusType.toBadgeStatus(status);
        const texts: any = {
            [StatusType.SUCCESS]: "Success",
            [StatusType.FIXED]: "Fixed",
            [StatusType.CANCELLED]: "Cancelled",
            [StatusType.FAILED]: "Failed",
            [StatusType.TIMED_OUT]: "Timed out",
        };
        return <div className={classNames(styles.badge, styles[`badge--${StatusType[badgeStatus]}`], className)}>
            <StatusIndicator className={styles.status} status={badgeStatus}/>
            <span className={styles.text}>{texts[status]}</span>
        </div>;
    }
}
