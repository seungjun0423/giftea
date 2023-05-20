import React from 'react';
import 'styles/login.css';
import login_logo from 'img/login_logo.svg';

function LoginModal() {
  return (
		<div className='login_modal'>
			<div className='close_btn'>
				x
			</div>

			<img className='login_logo' src={login_logo}>
			</img>

			<input className='input_box' type={'email'} placeholder={'이메일'}>
			</input>

			<input className='input_box' type={'password'} placeholder={'비밀번호'}>
			</input>

			<button className='login_btn'>
				로그인 하기
			</button>

			<div className='wrapper'>
				<div className='sign_in'>
					회원가입
				</div>
					|
				<div className='find_id_password'>
					아이디/비밀번호 찾기
				</div>
			</div>
			<div className='under_line'>
				
			</div>

			<div className='oauth_wrapper'>
				<div className='kakao_oauth'>

				</div>
			</div>

		</div>
  );
}

export default LoginModal;
