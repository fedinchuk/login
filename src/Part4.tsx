//import styles from './Core.module.scss'

export function Part4() {
	return (
		<form className='bg-primary/5 p-10 rounded-lg border border-solid border-white/5 shadow-lg'>
			<h1 className='text-6xl font-bold mb-5'>Login</h1>

			<input className='px-2 py-1 rounded border border-solid border-transparent duration-500 ease-linear transition-colors hover:border-primary focus:border-purple outline-none shadow-none block mb-6 bg-white/30 placeholder:text-white' type='text' placeholder='Enter email:' />

			<input
				className='px-2 py-1 rounded border border-solid border-transparent duration-500 ease-linear transition-colors hover:border-primary focus:border-purple outline-none shadow-none block mb-6 bg-white/30 placeholder:text-white'
				type='password'
				placeholder='Enter password:'
			/>

			<button className='dark:bg-white inline-block'>Submit</button>
		</form>
	)
}
