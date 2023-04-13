import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
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
      placeholder='8자 이상 입력해주세요.'
      onChange={()=>{}}
      style= {{
        marginTop: '1rem',
        color: 'white',
        width: '12rem',
    }}
    />
    <button
      data-testid="signup-button"
      onClick={()=>{}}
      style= {{
        backgroundColor: 'black',
        marginTop: '1rem',
        color: 'white',
        width: '12rem',
    }}
    >
      회원가입
    </button>
  </form>
  )
}
