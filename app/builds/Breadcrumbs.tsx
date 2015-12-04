import * as Immutable from "immutable";
import * as React from "react";
import classNames from "classnames";
const styles: any = require("./Breadcrumbs.scss");

interface IBreadcrumbsProps extends React.Props<any> {
    className?: string;
    location: Immutable.Map<string, any>;
}

export default class Breadcrumbs extends React.Component<IBreadcrumbsProps, {}> {
    public render() {
        const {className, location} = this.props;
        return <div className={classNames(styles.breadcrumbs, className)}>
            {Immutable.List(["app", "org", "repo"]).map((breadcrumbKey, i) => {
                return <div key={i} className={styles.breadcrumb} href="#">
                    {i !== 0 && <i className={classNames(styles.icon, "fa", "fa-angle-double-right")}/>}
                    <a className={styles.link} href="#">
                        {location.get(breadcrumbKey)}
                    </a>
                </div>;
            })}
        </div>;
    }
}
