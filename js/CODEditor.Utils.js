CODEditor.Utils = (function(C,$,undefined){

	var init = function(options){
		_defineExtraFunctions();
	};

	var _defineExtraFunctions = function(){
		//Extend JQuery functionality
		jQuery.fn.cssNumber = function(prop){
			var v = parseInt(this.css(prop),10);
			return isNaN(v) ? 0 : v;
		};
	};

	var isCodeEmpty = function(code){
		if((typeof code != "string")||(code.trim()==="")){
			return true;
		}

		//Remove text in comments
		switch(CODEditor.CORE.getCurrentEditorMode()){
			case "HTML":
				break;
			case "JavaScript":
				code = code.replace(/\/\*([\*\n\s\wáéíóúÁÉÍÓÚç¡!ªº\"#~%&()=\[\]\^{}<>$'`,;\-+_\?\¿\."])*\*\//, "")
				break;
			default:
				break;
		}

		if((typeof code != "string")||(code.trim()==="")){
			return true;
		}

		return false;
	};

	/*
	 * Text that can contain HTML but is expected to be plain text.
	 */
	var purgeTextString = function(text){
		if(typeof text !== "string"){
			return text;
		}
		return text.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&lt;b&gt;/g, '<b>').replace(/&lt;\/b&gt;/g, '</b>');
	};

	var showDialog = function(message){
		message = (typeof message === "string") ? message : "undefined";
		$('<div></div>').html("<p>" + message + "</p>").dialog({
			autoOpen: true,
			dialogClass:'notificationDialog',
			title: "Notificación",
			closeOnEscape: true,
			resizable: false,
			draggable: false,
			modal: true,
			open: function(event, ui) {
				var theDialog = this;
				//Close dialog when click outside
				$('.ui-widget-overlay').bind('click', function(){ 
					$(theDialog).dialog('close');
				});
			}
		});
	};

	return {
		init 					: init,
		isCodeEmpty				: isCodeEmpty,
		purgeTextString			: purgeTextString,
		showDialog				: showDialog
	};

}) (CODEditor,jQuery);