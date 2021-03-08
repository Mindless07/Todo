import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/newNav.module.css'



function NewNav(props) {


    return (
        <Nav>
            <span style={{display:'inherit'}}>
                <NavItem name='Logo'/>
                <NavItem name='Features'>
                    <DropDown>
                        <DropwDownItem name="Feature1"/>
                        <DropwDownItem name="Feature1"/>
                        <DropwDownItem name="Feature1"/>
                    </DropDown>
                </NavItem>    
                <NavItem name='Premium'/>
                <NavItem name='Homes'>
                    <DropDown>
                        <DropwDownItem name='Home1'/>
                        <DropwDownItem name='Home1'/>
                        <DropwDownItem name='Home1'/>
                    </DropDown>
                
                </NavItem>
            </span>
            <span style={{display:'inherit'}}>
                <NavItem name='Log in'/>
                <NavItem name='Sign up'/>
            </span>
        </Nav>
    )


}

export default NewNav;

function Nav(props){

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarnav}>
                {props.children}
            </ul>
        </nav>
    )
}

function NavItem(props) {

    const [open, setOpen] = useState(false);
    return (
        <li 
        onMouseEnter={()=>{setOpen(true)}}
        onMouseLeave={()=>{setOpen(false)}}
        className={styles.navItem}>
            <Link href='/'>
                <a style={{padding:'1vw'}} className="align-middle">{props.name}</a>
            </Link>
            
         {open && props.children ? props.children : null} 
        </li>
    )
    
}

function DropwDownItem(props) {
    
    return(
        <div className={styles.DropwDownItem}>
            {props.name}
        </div>
    )
    
}

function DropDown(props) {
    return(
        <div className={styles.dropDown}>
           {props.children}
        </div>
    )
    
}