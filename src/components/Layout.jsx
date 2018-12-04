import React from 'react';
import Menu from "./Menu";

const Layout = ({children}) => {
    return (
     <div class="layout">
         <span class="comp">component 'Layout'</span>
        <Menu />
        <div>{children}</div>
    </div>
    )
}
export default Layout;