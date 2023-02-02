import React from 'react';
import data from "../../data/Index/index-data.json";

export default function Boxes(){

    return (
        <section className="p-0">
            <div className="container-fluid">
            <div className="row row-flex">
                <div className="col-md-4">
                    <div className="col-inner spacer dark-bg dark-orange-bg">
                        <div className="text-center white-color">
                            <h2>{ data[0].title }</h2>
                            <p>
                                { data[0].description }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="col-inner spacer pink-bg-icon">
                        <div className="text-center white-color">
                            <h2>{ data[1].title }</h2>
                            <p>
                                { data[1].description }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="col-inner spacer dark-bg">
                        <div className="text-center white-color">
                            <h2>{ data[2].title }</h2>
                            <p>
                                { data[2].description }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}