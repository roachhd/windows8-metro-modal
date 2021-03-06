var Win8Modal = (function() {
	var container, popup, cover, openBtn, closeBtn;	

	function onDocumentKeyUp(event) {
		if(event.keyCode === 27) {
			deactivate();
		}
	}
	
	function onDocumentClick(event) {	
		if(event.target === cover) {
			deactivate();
		}
	}

	function activate() {
		document.addEventListener('keyup', onDocumentKeyUp, false);
		document.addEventListener('click', onDocumentClick, false);
		document.addEventListener('touchstart', onDocumentClick, false);

		setTimeout( function() {
			addClass(container, 'win8modal-active');
		}, 0 );
	}

	function deactivate() {
		document.removeEventListener('keyup', onDocumentKeyUp, false);
		document.removeEventListener('click', onDocumentClick, false);
		document.removeEventListener('touchstart', onDocumentClick, false);

		removeClass(container, 'win8modal-active');
	}	

	function addClass(element, name) {
		element.className = element.className.replace( /\s+$/gi, '' ) + ' ' + name;
	}

	function removeClass(element, name) {
		element.className = element.className.replace(name, '');
	}

	function show(){
		container = document.documentElement;
		popup = document.querySelector('.win8modal');
		cover = document.querySelector('.win8modal-cover');
		activate();
		return this;
	}

	function close() {
		deactivate();
	}

	function install() {
		openBtn = document.querySelector("*[data-wm-role='open']");
		closeBtn = document.querySelector("*[data-wm-role='close']");

		openBtn.addEventListener('click', show, false);
		openBtn.addEventListener('touchstart', show, false);

		closeBtn.addEventListener('click', close, false);
		closeBtn.addEventListener('touchstart', close, false);
	}

	function uninstall() {
		openBtn.removeEventListener('click', show, false);
		openBtn.removeEventListener('touchstart', show, false);

		closeBtn.removeEventListener('click', close, false);
		closeBtn.removeEventListener('touchstart', close, false);
	}

	return {
		activate: activate,
		deactivate: deactivate,
		show: show,
		close: close,
		install: install,
		uninstall: uninstall
	}
})();