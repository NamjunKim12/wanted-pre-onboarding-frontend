import React, {useState} from 'react'
import { validate } from '../../service/util/validate'

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSignUp = (e) => {
        e.preventDefault()
      //TODO: 회원가입 기능 구현
    }
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
      value={email}
      onChange={handleEmailChange}
      style= {{
        marginTop: '1rem',
        marginBottom: '1rem',
        width: '12rem',
    }}
    />
    비밀번호
    <input
      data-testid="password-input"
      placeholder='8자 이상 입력해주세요.'
      onChange={handlePasswordChange}
      style= {{
        marginTop: '1rem',
        width: '12rem',
    }}
    />
    <button
      data-testid="signup-button"
      onClick={handleSignUp}
      disabled={validate.email(email) && validate.password(password) ? false : true}
      style= {validate.email(email) && validate.password(password) ? 
        {
          backgroundColor: 'black',
          marginTop: '1rem',
          color: 'white',
          width: '12rem',
          cursor: 'pointer',
        } : {
          backgroundColor: 'gray',
          marginTop: '1rem',
          color: 'white',
          width: '12rem',
          cursor: 'not-allowed',
        }
      }
    >
      회원가입
    </button>
  </form>
  )
}
