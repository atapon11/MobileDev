import React from "react";
import AuthService from "../services/auth.service";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div className="container">
      <div className="row">
        <Card
          className="profile my-2"
          color="light"
          style={{ width: "500px", borderRadius: "20px" }}
        >
          <CardHeader>Profile</CardHeader>
          <CardBody>
            <CardTitle tag="h5">{currentUser.username}</CardTitle>
            <CardText>
              <b>Token</b> : {currentUser.accessToken.substring(0, 20)}...
              {currentUser.accessToken.substring(
                currentUser.accessToken.length - 20
              )}
            </CardText>
            <CardText>
              <b>ID : </b> {currentUser.id} <br />
              <b>Email : </b> {currentUser.email}
              <br />
            </CardText>
            <b>Authorities : </b> ({currentUser.roles.length})
            <ul>
              {currentUser.roles &&
                currentUser.roles.map((role, index) => (
                  <li key={currentUser.id}>{role}</li>
                ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
