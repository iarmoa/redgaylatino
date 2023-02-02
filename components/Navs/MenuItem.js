import React from 'react';
import Link from "next/link";
import MegaDropdown from './MegaDropdown';
import DropdownItem from './DropdownItem';

export default function MenuItem({ item }){
    const { title, link, itemsPerCol, megaMenu = false , subMenu = [], colsTitle } = item;
    const hasSubMenu = subMenu.length > 0
    const menu = hasSubMenu?
        <a href="#" onClick={e => e.preventDefault()}>{title}</a>:
        <Link href={link} className="dropdown-toggle" data-toggle="dropdown">{title}</Link>
    return (
        <>
            { menu }
            { 
                hasSubMenu && megaMenu &&
                <MegaDropdown
                    item={subMenu}
                    itemsPerCol={itemsPerCol}
                    columnTitle={colsTitle}
                />     
            }

            {
                hasSubMenu && !megaMenu &&
                <DropdownItem
                    item={subMenu}
                />
            }
        </>
    )
}