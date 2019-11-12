import React from 'react';
import { Link } from 'gatsby';
import Title from '../Globals/Title';
export default function Info() {
  return (
    <section className="py-5">
        <div className="container">
            <Title title="Our Story" />
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-center">
                    <p className="lead text-muted mb-5">
                        tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing
                    </p>
                    <Link to="/about">
                        <button className="btn text-uppercase btn-yellow">About Page</button>
                    </Link>
                </div>
            </div>
        </div>

    </section>
  );
}
