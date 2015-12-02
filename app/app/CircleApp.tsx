import * as Immutable from "immutable";
import * as React from "react";
import Badge from "../components/Badge";
import classNames from "classnames";
import {StatusType} from "../components/StatusType";
const styles: any = require("./CircleApp.scss");

interface IProps {
    className?: string;
}

interface IState {
    counter: number;
}

export default class CircleApp extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    public render() {
        const {className} = this.props;
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
            {Immutable.List([
                StatusType.SUCCESS,
                StatusType.FIXED,
                StatusType.CANCELLED,
                StatusType.FAILED
            ]).map((status, i) => {
                return <a key={i} className={styles.link} href="#">
                    <Badge className={styles.badge} status={status}/>
                </a>;
            })}
        </div>;
    }
}
