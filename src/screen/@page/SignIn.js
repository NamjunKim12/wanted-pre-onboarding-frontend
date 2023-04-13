import React, { useState } from "react";
import { validate } from "../../service/util/validate";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../story/api/auth";
import { store } from "../../service/store/store";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    const { access_token } = await authApi.signIn(email, password);
    setEmail("");
    setPassword("");
    if (access_token) {
      store.setLocalStorage(access_token);
      navigate("/todo");
    }
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      이메일
      <input
        data-testid="email-input"
        placeholder="이메일을 입력해주세요"
        onChange={handleEmailChange}
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          width: "12rem",
        }}
      />
      비밀번호
      <input
        type="password"
        data-testid="password-input"
        placeholder="8자 이상"
        onChange={handlePasswordChange}
        style={{
          marginTop: "1rem",
          width: "12rem",
        }}
      />
      <button
        data-testid="signup-button"
        onClick={handleSignIn}
        //TODO: 중복 조건 리팩토링
        disabled={
          validate.email(email) && validate.password(password) ? false : true
        }
        style={
          validate.email(email) && validate.password(password)
            ? {
                backgroundColor: "black",
                marginTop: "1rem",
                color: "white",
                width: "12rem",
                cursor: "pointer",
              }
            : {
                backgroundColor: "gray",
                marginTop: "1rem",
                color: "white",
                width: "12rem",
                cursor: "not-allowed",
              }
        }
      >
        로그인
      </button>
      <Link
        to="/SignUp"
        style={{
          marginTop: "1rem",
          color: "black",
          textDecoration: "none",
          border: "1px solid black",
          borderRadius: "5px",
          width: "8rem",
          textAlign: "center",
        }}
      >
        회원가입
      </Link>
    </form>
  );
}
