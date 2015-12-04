import * as Immutable from "immutable";
import * as React from "react";
import Breadcrumbs from "../builds/Breadcrumbs";
import Builds from "../builds/Builds";
import Navbar from "./Navbar";
import Repos from "../builds/Repos";
import classNames from "classnames";
import moment from "moment";
import StatusType from "../builds/StatusType";
const styles: any = require("./CircleApp.scss");

interface ICircleAppProps {
    className?: string;
}

export default class CircleApp extends React.Component<ICircleAppProps, {}> {
    public render() {
        const {className} = this.props;
        const statuses = Immutable.List([
            StatusType.SUCCESS,
            StatusType.FIXED,
            StatusType.CANCELLED,
            StatusType.FAILED,
            StatusType.TIMED_OUT,
            StatusType.RUNNING,
            StatusType.QUEUED
        ]);
        return <div className={classNames(styles.app, className)}>
            <Navbar className={styles.navbar}/>
            <div className={styles.main}>
                <div className={styles.header}>
                    <Breadcrumbs
                        location={Immutable.Map({
                            app: "Builds",
                            org: "Khan",
                            repo: "webapp-i18n-bigfile"
                        })}/>
                </div>
                <div className={styles.body}>
                    <Repos className={styles.repos}
                        repos={Immutable.List([
                            Immutable.Map({
                                branches: Immutable.Range(0, 10).map(i => {
                                    return Immutable.Map({
                                        date: moment.utc(1430622658084).subtract(3 * i, "days").valueOf(),
                                        name: `Branch ${i}`,
                                        status: statuses.get(i % statuses.size)
                                    });
                                }).toList(),
                                name: "Khan/webapp-i18n-bigfile"
                            }),
                            Immutable.Map({
                                branches: Immutable.List([
                                    Immutable.Map({
                                        date: 1430622658084,
                                        name: "master",
                                        status: StatusType.SUCCESS
                                    })
                                ]),
                                name: "Khan/internal-webserver"
                            }),
                            Immutable.Map({
                                branches: Immutable.List([
                                    Immutable.Map({
                                        date: 1430622658084,
                                        name: "master",
                                        status: StatusType.SUCCESS
                                    })
                                ]),
                                name: "Khan/arcanist"
                            })
                        ])}/>
                    <Builds className={styles.builds}
                        builds={Immutable.Range(0, 15).map(i => {
                            return Immutable.Map({
                                status: statuses.get(i % statuses.size)
                            });
                        }).toList()}/>
                </div>
            </div>
        </div>;
    }
}
