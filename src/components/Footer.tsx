import { useSelector } from "react-redux";
import { State } from "../store/reducer";
import "../stylesheets/Footer.scss";

export default function Footer() {
	const { timerId } = useSelector((state: State) => state);
	return (
		<div className={`bottom-area ${timerId ? "hidden" : ""}`}>
			<span className="hint">
				<kbd>Tab</kbd> : restart
			</span>
			<footer>
				<a
					target="_blank" // Opens link in new tab
					rel = "noreferrer" // prevents passing the referrer information to the target website
					href="https://github.com/faisalsaifii/rapid-typer">
					<span>&lt;/&gt;</span> github
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