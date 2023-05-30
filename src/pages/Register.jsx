import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/home");
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="section-login">
    <div className="color"></div>
    <div className="color"></div>
    <div className="color"></div>
    <div className="box">
      <div className="square" style={{ "--i":"0" }}></div>
      <div className="square" style={{ "--i":"1" }}></div>
      <div className="square" style={{ "--i":"2" }}></div>
      <div className="square" style={{ "--i":"3" }}></div>
       <div className="container-login top-regist">
        <div className="form-login">
          <h2>Registrasi</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <input type="text" placeholder="display name"/>
            </div>
            <div className="inputBox">
              <input type="email" placeholder="email"/>
            </div>
            <div className="inputBox">
              <input type="password" placeholder="password" name="" id=""/>
            </div>
            <div className="inputBox">
              <input style={{ display: "none" }} type="file" id="file" />
              <label className="add-image" htmlFor="file">
                <img src={Add} alt="" />
                <span>Add an avatar</span>
              </label>
            </div>
            <div className="inputBox">
              <input type="submit" value="Sign up"/>
            </div>
            {err && <span>Something went wrong</span>}
            <p className="forget">"You do have an account? <Link to="/login">Sign in</Link></p>
            <p className="forget">Go back to <Link to="/landing">Home?</Link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Register;
