import React from "react";
import { MDBInput, MDBCol } from "mdbreact";

const PostSearch = () => {
  return (
    <MDBCol md="6">
      <MDBInput hint="Search" type="text" containerClass="mt-0" />
    </MDBCol>
  );
}

export default PostSearch;