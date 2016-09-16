import {Question} from "./Question";
import {Quiz} from "./Quiz";

export const MOCK_TESTS = [
  new Quiz("0", "Test", [new Question("w1", "w2"), new Question("w3", "w4")]),
  new Quiz("1", "Test2", [new Question("w1", "w2"), new Question("w3", "w4")])
];
