import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import donors from '../../data/Index/donors.json';

export default function Donors(){

    return (
        <section className="pt-70 pb-50 white-bg">
          <div className="container">
            <div className="d-flex flex-row">
                {donors.map((donor) => (
                    <div className="client-logo col-md-12 text-center" key={donor.id}>
                        <Link passHref={true} href={donor.url}>
                            <a>
                                <Image
                                    className="img-responsive"
                                    src={require("/public/images/clients/" + donor.image)}
                                    alt={donor.name}
                                    width={donor.width}
                                    height={donor.height}
                                />
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
          </div>
        </section>
    );
}