import * as Immutable from "immutable";
import * as React from "react";
import Badge from "./Badge";
import Build from "./Build";
import classNames from "classnames";
import StatusType from "./StatusType";
const styles: any = require("./CircleApp.scss");

interface ICircleAppProps {
    className?: string;
}

interface ICircleAppState {
    counter: number;
}

export default class CircleApp extends React.Component<ICircleAppProps, ICircleAppState> {
    constructor(props: ICircleAppProps) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    public render() {
        const {className} = this.props;
        const statuses = Immutable.List([
            StatusType.SUCCESS,
            StatusType.FIXED,
            StatusType.CANCELLED,
            StatusType.FAILED,
            StatusType.TIMED_OUT
        ]);
        return <div className={classNames(styles.app, className)}>
            <div>
                <button type="button"
                    onClick={() => this.setState({counter: this.state.counter + 1})}>
                    Inc
                </button>
            </div>
            <div>
                Counter: {this.state.counter}
            </div>
            {statuses.map((status, i) => {
                return <Build key={i}
                    className={styles.build}
                    status={status}/>;
            })}
            {statuses.map((status, i) => {
                return <a key={i} className={styles.link} href="#">
                    <Badge className={styles.badge} status={status}/>
                </a>;
            })}
        </div>;
    }
}
