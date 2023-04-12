import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <form style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
    이메일
    <input
      data-testid="email-input"
      placeholder='이메일을 입력해주세요'
      onChange={()=>{}}
      style= {{
        marginTop: '1rem',
        marginBottom: '1rem',
        color: 'white',
        width: '12rem',
    }}
    />
    비밀번호
    <input
      type="password"
      data-testid="password-input"
      placeholder='8자 이상'
      onChange={()=>{}}
      style= {{
        marginTop: '1rem',
        color: 'white',
        width: '12rem',
    }}
    />
    <button
      data-testid="signin-button"
      onClick={()=>{}}
      style= {{
        backgroundColor: 'black',
        marginTop: '1rem',
        color: 'white',
        width: '12rem',
    }}
    >
      로그인
    </button>
    <Link to='/SignUp' 
        style= {{
            marginTop: '1rem',
            color: 'black',
            textDecoration: 'none',
            border: '1px solid black',
            borderRadius: '5px',
            width: '8rem',
            textAlign: 'center',
        }}
    >
        회원가입</Link>
  </form>
  )
}
