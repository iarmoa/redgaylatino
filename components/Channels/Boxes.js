import React from 'react';
import Link from "next/link";
import Icon from '../Elements/Icon';

export default function Boxes(){
    return (
        <section className="p-0">
            <div className="container-fluid">
                <div className="row row-flex">
                    <div className="col-md-3">
                        <div className="col-inner spacer dark-bg">
                            <div className="text-center white-color">
                                <Icon icon="facebook" className="font-50px white-icon" />
                                <Link href={"https://www.facebook.com/redgaylatino"}>
                                    <a><h2>GayLatino</h2></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="col-inner spacer gradient-bg">
                            <div className="text-center white-color">
                                <Icon icon="email" className="font-50px white-icon" />
                                <Link href={"mailto:contacto@redgaylatino.org"}>    
                                    <a><h3>contacto@redgaylatino.org</h3></a>
                                </Link>
                            </div>
                        </div>
                    </div>                    
                    <div className="col-md-3">
                        <div className="col-inner spacer dark-bg">
                            <div className="text-center white-color">
                                <Icon icon="twitter" className="font-50px white-icon" />
                                <Link href={"https://twitter.com/redgaylatino"}>
                                    <a><h3>@redgaylatino</h3></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="col-inner spacer gradient-bg">
                            <div className="text-center white-color">
                                <Icon icon="instagram" className="font-50px white-icon" />
                                <Link href={"https://www.instagram.com/redgaylatino/"}>
                                    <a><h3>redgaylatino</h3></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}