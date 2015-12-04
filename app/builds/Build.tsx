import * as React from "react";
import Badge from "./Badge";
import classNames from "classnames";
import StatusType from "./StatusType";
const styles: any = require("./Build.scss");

interface IBuildProps extends React.Props<any> {
    className?: string;
    status: StatusType;
}

export default class Build extends React.Component<IBuildProps, {}> {
    public render() {
        const {className, status} = this.props;
        return <div className={classNames(styles.build, className)}>
            <div className={styles.status}>
                <Badge className={styles.badge} status={status}/>
            </div>
            <div className={styles.info}>
                <div className={styles.infoText}>
                    <a className={styles.titleLink} href="#">production-2015-12-02 #84</a>
                    <a className={styles.subtitleLink} href="#">fix report filter</a>
                </div>
                <div className={styles.fields}>
                    <div className={styles.field}>
                        <i className={classNames(styles.fieldIcon, styles["fieldIcon--avatar"], "fa", "fa-user")}/>
                    </div>
                    <div className={styles.field}>
                        <i className={classNames(styles.fieldIcon, "fa", "fa-code")}/>
                        <div className={styles.fieldText}>
                            <a className={styles.fieldLink} href="#">c1cd508</a>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <i className={classNames(styles.fieldIcon, "fa", "fa-clock-o")}/>
                        <div className={styles.fieldText}>
                            22 mins ago
                        </div>
                    </div>
                    <div className={styles.field}>
                        <i className={classNames(styles.fieldIcon, "fa", "fa-hourglass-start")}/>
                        <div className={styles.fieldText}>
                            02:22
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
