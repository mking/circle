import * as classNames from "classnames";
import * as React from "react";
import {StatusType} from "./StatusType";
const styles: any = require("./Badge.scss");

interface IProps {
    className?: string;
    status: StatusType;
}

export class Badge extends React.Component<IProps, {}> {
    public render() {
        const {className, status} = this.props;
        const icons: {[key: number]: string} = {
            [StatusType.SUCCESS]: "fa-check",
            [StatusType.FIXED]: "fa-check",
            [StatusType.CANCELLED]: "fa-minus",
            [StatusType.FAILED]: "fa-exclamation"
        };
        return <div className={classNames(styles.badge, styles[`badge--${StatusType[status]}`], className)}>
            <div className={styles.status}>
                <i className={classNames(styles.icon, "fa", icons[status])}/>
            </div>
            <span className={styles.text}>{StatusType[status]}</span>
        </div>;
    }
}
