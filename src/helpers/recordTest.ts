import {
	appendTypedHistory,
	backtrackWord,
	setChar,
	setTypedWord,
} from "store/actions";
import { store } from "store/store";
import { resetTest } from "./resetTest";
import { startTimer } from "./startTimer";

const handleBackspace = (ctrlKey: boolean) => {
	const { dispatch, getState } = store;
	const { typedWord, currWord, wordList, typedHistory, activeWordRef } =
		getState();
	const currIdx = wordList.indexOf(currWord);
	const currWordEl = activeWordRef?.current!;
	if (
		typedWord.length === 0 &&
		typedHistory[currIdx - 1] !== wordList[currIdx - 1]
	) {
		dispatch(backtrackWord(ctrlKey));
		currWordEl.previousElementSibling!.classList.remove("right", "wrong");
		if (ctrlKey) {
			currWordEl.previousElementSibling!.childNodes.forEach((char) => {
				if (char instanceof HTMLSpanElement)
					char.classList.remove("wrong", "right");
			});
		}
	} else {
		if (ctrlKey) {
			dispatch(setTypedWord(""));
			currWordEl.childNodes.forEach((char) => {
				if (char instanceof HTMLSpanElement)
					char.classList.remove("wrong", "right");
			});
		} else {
			const newTypedWord = typedWord.slice(0, typedWord.length - 1);
			dispatch(setTypedWord(newTypedWord));
		}
	}
};

export const recordTest = (key: string, ctrlKey: boolean) => {
	const { dispatch, getState } = store;
	const {
		typedWord,
		currWord,
		timer,
		timeLimit,
		timerId,
		activeWordRef,
		caretRef,
	} = getState();

	if (timer === 0) {
		if (key === "Tab") {
			resetTest();
		}
		return;
	}
	if (timerId === null && key !== "Tab") startTimer();
	const currWordEl = activeWordRef?.current!;
	currWordEl.scrollIntoView({ behavior: "smooth", block: "center" });
	const caret = caretRef?.current!;
	caret.classList.remove("blink");
	setTimeout(() => caret.classList.add("blink"), 500);
	switch (key) {
		case "Tab":
			if (timer !== timeLimit || timerId) {
				resetTest();
				document.getElementsByClassName("word")[0].scrollIntoView();
			}
			break;
		case " ":
			if (typedWord === "") return;
			currWordEl.classList.add(
				typedWord !== currWord ? "wrong" : "right"
			);
			dispatch(appendTypedHistory());
			break;
		case "Backspace":
			handleBackspace(ctrlKey);
			break;
		default:
			dispatch(setChar(typedWord + key));
			break;
	}
};
