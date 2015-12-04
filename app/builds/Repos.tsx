import * as Immutable from "immutable";
import * as React from "react";
import classNames from "classnames";
import Repo from "./Repo";
const styles: any = require("./Repos.scss");

interface IReposProps extends React.Props<any> {
    className?: string;
    repos: Immutable.List<any>;
}

export default class Repos extends React.Component<IReposProps, {}> {
    public render() {
        const {className, repos} = this.props;
        return <div className={classNames(styles.repos, className)}>
            {repos.map((repo, i) => {
                return <Repo key={i}
                    className={styles.repo}
                    name={repo.get("name")}
                    branches={repo.get("branches")}/>;
            })}
        </div>;
    }
}
