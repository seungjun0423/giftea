import React from 'react';
import axios from 'axios';

import kakao_login from 'img/kakao_login.png';
import login_logo from 'img/login_logo.svg';
import 'styles/login.css';

type onOff = {
	isOpenLoginModal: boolean
}

function LoginModal({isOpenLoginModal}: onOff) {
	
	const test = async() => {
		const data = await axios.get("http://localhost:4000/api/v1/users").then(result=>result.data);
		return data;
	}

	console.log(test());

  return isOpenLoginModal ?(
		<div className='login_modal'>
			<div className='close_btn_box'>
				<button className='close_btn'>x</button>
			</div>

			<img className='login_logo' src={login_logo}>
			</img>

			<div className='input_box_wrapper'>
				<input className='input_box' type={'email'} placeholder={'이메일'}>
				</input>

				<input className='input_box' type={'password'} placeholder={'비밀번호'}>
				</input>
			</div>

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
				<div className='line' ></div>
				<div className='line_text'>or</div>
				<div className='line'></div>
			</div>

			<div className='oauth_wrapper'>
				<img className='kakao_oauth' src={kakao_login}>
				</img>
			</div>

		</div>
  ):<></>;
}

export default LoginModal;
