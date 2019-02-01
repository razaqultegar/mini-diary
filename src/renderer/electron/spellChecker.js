// eslint-disable-next-line import/no-unresolved
import { SpellCheckHandler, ContextMenuListener, ContextMenuBuilder } from 'electronSpellchecker';

import { getLang } from './ipcRenderer/senders';

const lang = getLang();

/**
 * Set up spell checker and context menus
 */
export function initSpellChecker() {
	window.spellCheckHandler = new SpellCheckHandler();
	window.spellCheckHandler.attachToInput();
	window.spellCheckHandler.switchLanguage(lang);
	const contextMenuBuilder = new ContextMenuBuilder(window.spellCheckHandler);
	// eslint-disable-next-line no-unused-vars
	const contextMenuListener = new ContextMenuListener(info => {
		contextMenuBuilder.showPopupMenu(info);
	});
}
