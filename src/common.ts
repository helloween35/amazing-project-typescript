export default class Common {
	static instance = undefined;

	/**
	 * Lekérdezi a DOM-ból a #content elemet és készít belőle egy instance-t
	 */
	static getContainer() {
		if(instance === undefined) {
			Common.instance = document.getElementById("content");
		}

		return Common.instance;
	}

	/**
	 *
	 * @param selector - DOM-on belül melyik HTML elembe szeretnénk beinjektálni a szintén paraméterül kapott HTML-t
	 * @param html - A megadott szelektoron belülre injektálja a HTML-t
	 * @private
	 */
	private renderElement(selector, html) {
		const elements = Common.getContainer().getElementsByClassName(selector + "-container");
		if (elements !== null) {
			elements[0].innerHTML = html;
		}
	}
}