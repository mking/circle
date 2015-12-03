import * as Immutable from "immutable";
import * as React from "react";
import classNames from "classnames";
const styles: any = require("./Navbar.scss");

interface INavbarProps extends React.Props<any> {
    className?: string;
}

export default class Navbar extends React.Component<INavbarProps, {}> {
    public render() {
        const {className} = this.props;
        const links = Immutable.List([
            Immutable.Map({
                icon: "fa-circle-o-notch",
                name: "Home"
            }),
            Immutable.Map({
                icon: "fa-user",
                name: "Settings"
            }),
            Immutable.Map({
                icon: "fa-file",
                name: "Documentation"
            }),
            Immutable.Map({
                icon: "fa-commenting",
                name: "Support"
            }),
            Immutable.Map({
                icon: "fa-plus-circle",
                name: "Add Project"
            }),
            Immutable.Map({
                icon: "fa-user-plus",
                name: "Invite your Team"
            }),
            Immutable.Map({
                icon: "fa-bell",
                name: "Changelog"
            }),
            Immutable.Map({
                icon: "fa-bar-chart",
                name: "Insights"
            })
        ]);
        return <div className={classNames(styles.navbar, className)}>
            {links.map((link, i) => {
                return <a key={i} className={classNames(styles.link, styles[`link--${link.get("name")}`])} href="#">
                    <i className={classNames(styles.icon, "fa", link.get("icon"))}/>
                </a>;
            })}
        </div>;
    }
}
