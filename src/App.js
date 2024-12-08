import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './components/main/Home'
<<<<<<< HEAD
import Header from './components/main/Header'
import ShowBots from './components/bots/ShowBots'

function App() {
	return (
		<div className='flex flex-col min-h-screen bg-[#6F94B6]'>
=======

function App() {
	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#999999]'>
>>>>>>> 8bf0b89 (Start)
			<Routes>
				<Route
					path='/'
					element={
						<>
<<<<<<< HEAD
							<Header />
=======
>>>>>>> 8bf0b89 (Start)
							<Home />
						</>
					}
				/>
<<<<<<< HEAD
				<Route
					path='/my_bots'
					element={
						<>
							<Header />
							<ShowBots />
						</>
					}
				/>
=======
>>>>>>> 8bf0b89 (Start)
				<Route path='/profile' element={<></>} />
			</Routes>
		</div>
	)
}

export default App
