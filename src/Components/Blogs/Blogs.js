import React from "react";

const Blogs = () => {
  return (
    <div className="row mt-3">
      <div className="mx-auto border border-white col-8">
        <h5 className="card-title">Difference between javascript and nodejs</h5>
        <p className="card-text">
          JavaScript is a simple programming language that runs in any browser
          JavaScript Engine. Whereas Node JS is an interpreter or running
          environment for a JavaScript programming language that holds many
          excesses.
        </p>
      </div>
      <div className="mx-auto border border-white col-8 mt-2">
        <h5 className="card-title">
          When should you use nodejs and when should you use mongodb
        </h5>
        <p className="card-text">
          Node. js is primarily used for non-blocking, event-driven servers, due
          to its single-threaded nature. It's used for traditional web sites and
          back-end API services, but was designed with real-time, push-based
          architectures in mind.SQL. NoSQL databases like MongoDB are a good
          choice when your data is document-centric and doesn't fit well into
          the schema of a relational database, when you need to accommodate
          massive scale, when you are rapidly prototyping, and a few other use
        </p>
      </div>
      <div className="mx-auto border border-white col-8 mt-2">
        <h5 className="card-title">
          Differences between sql and nosql databases.
        </h5>
        <p className="card-text">
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable.
        </p>
      </div>
      <div className="mx-auto border border-white col-8 mt-2">
        <h5 className="card-title">
          What is the purpose of jwt and how does it work
        </h5>
        <p className="card-text">
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server
        </p>
      </div>
    </div>
  );
};

export default Blogs;
