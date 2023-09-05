export default class Common {
	static instance = undefined;

	static getContainer() {
		if(typeof instance === "undefined") {
			Common.instance = document.getElementById("content");
		}

		return Common.instance;
	}

	renderElement(selector, html) {
		const elements = Common.getContainer().getElementsByClassName(selector + "-container");
		if (typeof elements !== "null") {
			elements[0].innerHTML = html;
		}
	}
}