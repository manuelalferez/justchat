import Link from 'next/link';
import Image from 'next/image';

const Index = () => {
	return (
		<div className="grid justify-items-center bg-green-100 h-screen">
			<Link href="/">
				<a className="h-4">
					<Image src="/logo.png" alt="JustChat logo" width={200} height={100} />
				</a>
			</Link>
			<form method="POST" className="flex flex-col w-96 justify-center">
				<input
					type="text"
					id="user"
					placeholder="User"
					name="user"
					className="mb-2 p-3 pl-7 rounded-sm shadow-md"
				/>
				<input
					type="password"
					id="password"
					placeholder="Password"
					name="password"
					className="mb-6 p-3 pl-7 rounded-sm shadow-md"
				/>
				<button
					type="submit"
					className="hover:bg-green-800 bg-green-600 shadow-md text-white rounded-md py-2 w-1/2 self-center"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Index;
