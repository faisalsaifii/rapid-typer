import "stylesheets/Footer.scss";

export default function Footer() {
	return (
		<div>
			<span>
				<kbd>Tab</kbd> : restart
			</span>
			<footer>
				<a
					target="_blank" // Opens link in new tab
					rel = "noreferrer" // prevents passing the referrer information to the target website
					href="https://github.com/faisalsaifii/rapid-typer">
					github
				</a>
				<span>
					created by{" "}
					<a
						target = "_blank"
						rel="noreferrer"
						href="https://github.com/faisalsaifii">
						@faisalsaifii
					</a>
				</span>

			</footer>
		</div>
	);
}