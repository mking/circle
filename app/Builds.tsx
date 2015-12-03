import * as Immutable from "immutable";
import * as React from "react";
import Build from "./Build";
import classNames from "classnames";
const styles: any = require("./Builds.scss");

interface IBuildsProps extends React.Props<any> {
    className?: string;
    builds: Immutable.List<any>;
}

export default class Builds extends React.Component<IBuildsProps, {}> {
    public render() {
        const {className, builds} = this.props;
        return <div className={classNames(styles.builds, className)}>
            {builds.map((build, i) => {
                return <Build key={i}
                    className={styles.build}
                    status={build.get("status")}/>;
            })}
        </div>;
    }
}
