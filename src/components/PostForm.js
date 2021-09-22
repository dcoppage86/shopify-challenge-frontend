import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            description: ""
         }
    }
    render() { 
        return ( 
            <MDBContainer>
                <MDBRow>
                  <MDBCol md="10">
                    <form>
                    <MDBInput className="textfield" label="Title"/>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="inputGroupFileAddon01">
                            Upload
                          </span>
                        </div>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="inputGroupFile01"
                            aria-describedby="inputGroupFileAddon01"
                          />
                          <label className="custom-file-label" htmlFor="inputGroupFile01">
                            Choose file
                          </label>
                        </div>
                      </div>
                      <MDBInput type="textarea" label="Description" rows="5" />
                    </form>
                  </MDBCol>
                </MDBRow>
            </MDBContainer>
         );
    }
}
 
export default PostForm;
