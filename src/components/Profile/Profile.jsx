import { signOut } from "firebase/auth";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Profile = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth);
  };
  return (
    <div>
      <Card className="mx-auto mt-5" style={{ width: "50%" }}>
        <Card.Img variant="top" src={user?.photoURL} />
        <Card.Body>
          <Card.Title>{user?.displayName}</Card.Title>
          <Card.Text>{user?.email}</Card.Text>
          <div className="text-center">
            <Button onClick={handleLogOut} className="" variant="primary">
              Log Out
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
