import * as React from "react";
import StatusIndicator from "./StatusIndicator";
import StatusType from "./StatusType";
import classNames from "classnames";
import moment from "moment";
const styles: any = require("./Branch.scss");

interface IBranchProps extends React.Props<any> {
    className?: string;
    status: StatusType;
    name: string;
    date: number;
}

export default class Branch extends React.Component<IBranchProps, {}> {
    public render() {
        const {className, date, name, status} = this.props;
        return <a className={classNames(styles.branch, className)} href="#">
            <div className={styles.status}>
                <StatusIndicator className={styles.statusIndicator} status={StatusType.toBadgeStatus(status)}/>
            </div>
            <div className={styles.text}>
                <div className={styles.title}>
                    {name}
                </div>
                <div className={styles.subtitle}>
                    {moment(date).fromNow()}
                </div>
            </div>
        </a>;
    }
}
