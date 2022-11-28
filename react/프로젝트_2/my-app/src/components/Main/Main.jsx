import {useState, useEffect, useContext} from 'react'
import React from 'react'
import About from './about/About'
import './main.css'
import Posts from './posts/Posts'
import UserContext from '../../context/UserContext'
import axios from 'axios'

export default function Main() {
	const {isLogin} = useContext(UserContext);
	// 로그인 정보는 useContext를 많이 쓰긴 한다. 물론 props로 해줘도 됨.

	const [posts, setPosts] = useState()

	useEffect(()=>{
				axios.get('https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json')
					.then(json => {
						setPosts(json.data);
			// 그냥 setPosts(json)을 하면 무한반복이 일어난다.
			// axios 나 fetch는 useEffect를 사용해야 한다. 무한반복 방지.
					})
	}, [])

  return (
		<main>
			{posts !== undefined ? (
							<div className="max-width">
							<h2 className="a11y-hidden">Post</h2>
							<ul className="posts">
								{/* components array로 생성 */}
								<Posts posts={posts}/>
							</ul>
							{isLogin ? <About/> : <></>}
						</div>
			) : <></>}
		</main>
    
  )
}
