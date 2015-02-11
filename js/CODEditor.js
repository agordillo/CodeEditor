/**
 * CODE Editor
 * CODE Editor is a HTML5 application to learn web technologies.
 * https//github.com/agordillo/CodeEditorApp
 *
 * @module CODEditor
 */
var CODEditor = CODEditor || {};

CODEditor.VERSION = '0.0.1';
CODEditor.AUTHORS = 'Aldo Gordillo';
CODEditor.URL = "http://github.com/agordillo/CodeEditorApp";



CODEditor.CORE = (function(C,$,undefined){

	var _editor; //ACE editor instance

	var _viewModes = ["CODE","RESULT","HYBRID"];
	var _currentViewMode;

	var _editorModes = ["HTML","JavaScript"];
	var _currentEditorMode;

	var _editorThemes = ["Chrome","Twilight"];
	var _currentEditorTheme;


	var init = function(options){
		CODEditor.Utils.init();
		CODEditor.FullScreen.init();

		//Default view mode (CODE)
		_changeViewMode(_viewModes[0]);

		CODEditor.UI.init();
		_initEditor();
		CODEditor.UI.updateSettingsPanel();

		_loadEvents();

		CODEditor.JS.init();
		CODEditor.HTML.init();
	};

	var getCurrentViewMode = function(){
		return _currentViewMode;
	};

	var getCurrentEditorMode = function(){
		return _currentEditorMode;
	};

	var getCurrentEditorTheme = function(){
		return _currentEditorTheme;
	};

	var _initEditor = function(options){
		_editor = ace.edit("editor");

		//Specify Default values
		_changeEditorMode(_editorModes[1]); //It will trigger editor.getSession().setMode("ace/mode/javascript");
		_changeEditorTheme(_editorThemes[0]); //It will trigger editor.setTheme("ace/theme/chrome");

		document.getElementById('editor').style.fontSize='14px';
		_editor.setShowPrintMargin(false);
	};

	var _loadEvents = function(){
		window.onresize = function(event){
			CODEditor.UI.adjustView();
		};

		$("ul.menu > li[group='view']").click(function(){
			$("ul.menu li[group=view]").removeClass("active");
			$(this).addClass("active");
			_changeViewMode($(this).attr("viewMode"));
		});

		$("#settings").click(function(e){
			if($(this).hasClass("active")){
				$(this).removeClass("active");
				$("#settings_panel").hide();
			} else {
				$(this).addClass("active");
				$("#settings_panel").show();
			}
		});

		$("#editorModeMenu").click(function(){
			$("#settings").trigger("click");
		});

		$("#closeSettingsButton").click(function(){
			$("#settings").removeClass("active");
			$("#settings_panel").hide();
		});

		$("#settings_fontsize").change(function(event) {
			var newFontsize = $(this).val();
			document.getElementById('editor').style.fontSize=newFontsize;
		});

		$("#settings_mode").change(function(event) {
			var newEditorMode = $(this).val();
			_changeEditorMode(newEditorMode);
		});

		$("#settings_theme").change(function(event) {
			var newTheme = $(this).val();
			_changeEditorTheme(newTheme);
		});

		$("#run").click(function(){
			_runCode();
		});

		$("#open").click(function(){
			_openFile();		
		});

		$("#save").click(function(){
			_saveFile();
		});
	};

	var _openFile = function(){
		//FileReader API support (doc at https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
		var isFileReaderSupported = false;
		try {
			if(window.File && window.FileReader && window.FileList && window.Blob){
				isFileReaderSupported = true;
			}
		} catch (e) {}

		if(!isFileReaderSupported){
			return alert("Lo siento, tu navegador no puede leer ficheros.");
		}

		var fileInput = document.getElementById('openFileInput');
		fileInput.addEventListener('change', _fileHandler);
	};

	var _fileHandler = function(){
		var fileInput = document.getElementById('openFileInput');
		var file = fileInput.files[0];
		var fileType = _isValidFileType(file.type);

		if (fileType!==false) {
			var reader = new FileReader();

			reader.onload = function(e){
				_resetFileHandler(fileInput);
				_processFile(reader.result,fileType);
			}

			reader.onerror = function(e){
				_resetFileHandler(fileInput);
				alert("Se produjo un error leyendo el fichero.");
			}

			reader.readAsText(file);
		} else {
			_resetFileHandler(fileInput);
			alert("Formato de fichero no soportado.");
		}
	};

	var _resetFileHandler = function(fileInput){
		fileInput.removeEventListener('change', _fileHandler);
		$(fileInput).val("");
		fileInput.addEventListener('change', _fileHandler);
	};

	var _isValidFileType = function(fileType){
		if(typeof fileType != "string"){
			return false;
		}

		var acceptedTypes = ["text/html","application/javascript",/text.*/];

		for(var i=0; i<acceptedTypes.length; i++){
			if(fileType.match(acceptedTypes[i])){
				return acceptedTypes[i];
			}
		}

		return false;
	};

	var _processFile = function(fileContent,fileType){
		if(fileType=="text/html"){
			//HTML file
			_changeEditorMode("HTML");
		} else if (fileType=="application/javascript"){
			//JS file.
			_changeEditorMode("JavaScript");
		} else  if(fileType.match(/text.*/)){
			//Text file.
			_changeEditorMode("HTML");
		}

		_editor.setValue(fileContent);
	};

	var _saveFile = function(){
		var isFileSaverSupported = false;
		try {
			isFileSaverSupported = !!new Blob;
		} catch (e) {}

		if(!isFileSaverSupported){
			alert("Lo siento, tu navegador no puede descargar ficheros.");
		}

		var filename = "file.txt";
		switch(_currentEditorMode){
			case "HTML":
				filename = "index.html";
				break;
			case "JavaScript":
				filename = "script.js";
				break;
			default:
				return;
		}

		var dataToDownload = _editor.getValue();
		var blob = new Blob([dataToDownload], {type: "text/plain;charset=utf-8"});
		saveAs(blob, filename);
	};

	var _changeViewMode = function(viewMode){
		if((_viewModes.indexOf(viewMode)!=-1)&&(viewMode!=_currentViewMode)){
			var wrappersDOM = $("#editor_wrapper, #preview_wrapper");
			for(var i in _viewModes){
				if(viewMode === _viewModes[i]){
					_currentViewMode = viewMode;
					$(wrappersDOM).addClass(viewMode);
					$("ul.menu > li[group='view'][viewMode='"+viewMode+"']").addClass("active");
				} else {
					$(wrappersDOM).removeClass(_viewModes[i]);
					$("ul.menu > li[group='view'][viewMode='"+_viewModes[i]+"']").removeClass("active");
				}
			};
			if(typeof _editor != "undefined"){
				_editor.resize();
			}
		}
	};

	var _changeEditorMode = function(editorMode){
		if((_editorModes.indexOf(editorMode)!=-1)&&(editorMode!=_currentEditorMode)){

			var wrappersDOM = $("#editor_wrapper, #preview_wrapper");
			$(wrappersDOM).addClass(_currentEditorMode);

			$("#preview_wrapper #preview_header").html("");
			$("#preview_wrapper #preview").html("");

			for(var i in _editorModes){
				if(editorMode === _editorModes[i]){
					_currentEditorMode = editorMode;
					$(wrappersDOM).addClass(editorMode);
					$("#editorModeMenu").html(editorMode);
				} else {
					$(wrappersDOM).removeClass(_editorModes[i]);
				}
			};

			if(typeof _editor != "undefined"){
				var aceMode;
				var initialValue = "";
				switch(editorMode){
					case "HTML":
						aceMode = "ace/mode/html";
						initialValue = "<html>\n\n</html>"
						$("#editor_tab p").html("index.html");
						break;
					case "JavaScript":
						aceMode = "ace/mode/javascript";
						$("#editor_tab p").html("script.js");
						$("#preview_wrapper.JavaScript #preview_header").html("<p>Consola</p>");
						break;
					default:
						return;
				}
				if(typeof aceMode == "string"){
					_editor.getSession().setMode(aceMode);
					_editor.setValue(initialValue);
				}
			}
		}
	};

	var _changeEditorTheme = function(editorTheme){
		if((_editorThemes.indexOf(editorTheme)!=-1)&&(editorTheme!=_currentEditorTheme)){

			$("body").removeAttr("theme");

			for(var i in _editorThemes){
				if(editorTheme === _editorThemes[i]){
					_currentEditorTheme = editorTheme;
					$("body").attr("theme",editorTheme);
				}
			};

			if(typeof editor != "undefined"){
				var aceTheme;
				switch(editorTheme){
					case "Chrome":
						aceTheme = "ace/theme/chrome";
						break;
					case "Twilight":
						aceTheme = "ace/theme/twilight";
						break;
					default:
						return;
				}
				if(typeof aceTheme == "string"){
					_editor.setTheme(aceTheme);
				}
			}
		}
	};

	var _runCode = function(){
		if(typeof _editor == "undefined"){
			return;
		}

		CODEditor.UI.cleanPreview();

		var code = _editor.getValue();

		if(_currentViewMode === "CODE"){
			_changeViewMode("HYBRID");
		}

		switch(_currentEditorMode){
			case "HTML":
				return CODEditor.HTML.runHTMLcode(code);
			case "JavaScript":
				return CODEditor.JS.runJavaScriptcode(code);
			default:
				return;
		}
	};


	return {
		init 					: init,
		getCurrentViewMode		: getCurrentViewMode,
		getCurrentEditorMode 	: getCurrentEditorMode,
		getCurrentEditorTheme	: getCurrentEditorTheme
	};

}) (CODEditor,jQuery);