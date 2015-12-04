import * as Immutable from "immutable";
import * as React from "react";
import classNames from "classnames";
const styles: any = require("./Navbar.scss");
import Tooltip from "../common/Tooltip";

interface INavbarProps extends React.Props<any> {
    className?: string;
}

interface INavbarState {
    tooltip?: string;
}

export default class Navbar extends React.Component<INavbarProps, INavbarState> {
    constructor(props: INavbarProps) {
        super(props);
        this.state = {
            tooltip: null
        };
    }

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
                name: "Invite your teammates"
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
                return <a key={i}
                    className={classNames(styles.link, styles[`link--${link.get("name")}`])}
                    href="#"
                    onMouseEnter={() => {
                        this.setState({
                            tooltip: link.get("name")
                        });
                    }}
                    onMouseLeave={() => {
                        this.setState({
                            tooltip: null
                        });
                    }}>
                    <i className={classNames(styles.icon, "fa", link.get("icon"))}/>
                    <Tooltip className={styles.tooltip}
                        style={{
                            opacity: this.state.tooltip === link.get("name") && 1
                        }}>
                        {link.get("name")}
                    </Tooltip>
                </a>;
            })}
        </div>;
    }
}
