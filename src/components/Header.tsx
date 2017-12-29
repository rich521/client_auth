import * as React from 'react';

export interface HeaderProps {}

export class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <nav>
                <div>
                    <a>Logo</a>
                    <ul>
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
