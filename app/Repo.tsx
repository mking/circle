import * as Immutable from "immutable";
import * as React from "react";
import Branch from "./Branch";
import classNames from "classnames";
const styles: any = require("./Repo.scss");

interface IRepoProps extends React.Props<any> {
    className?: string;
    name: string;
    branches: Immutable.List<any>;
}

export default class Repo extends React.Component<IRepoProps, {}> {
    public render() {
        const {className, branches, name} = this.props;
        return <div className={classNames(styles.repo, className)}>
            <a className={styles.repoHeader} href="#">{name}</a>
            <div className={styles.branches}>
                {branches.map((branch, i) => {
                    return <Branch key={i}
                        className={styles.branch}
                        name={branch.get("name")}
                        status={branch.get("status")}
                        date={branch.get("date")}/>;
                })}
            </div>
        </div>;
    }
}
