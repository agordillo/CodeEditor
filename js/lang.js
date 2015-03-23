// CODEditor Translation File

// Instructions to translate this file:
// * Only the words in quotation marks ("") after the colon (:)  should be translated. They should be removed and replaced by the corresponding translation inside the quotation marks, i.e in spanish:
// "i.name": "Name", -> "i.name": "Nombre",

// * Even inside the quotation marks sometimes #{example} appears. That should not be translated as it will be substituted by a value, i.e in spanish:
// "i.welcome_message": "Hello #{name}, welcome to CODEditor.", -> "i.welcome_message": "Hola #{name}, bienvenido a CODEditor.",
// In the above example, #{name} should not be translated as it will be replaced by the name of the user.

// Some symbols are represented by codes. For instance, "&#8209;" means "-". So, "e-Learning", may be represented as "e&#8209;Learning". Please, keep the symbols.

var CODEditor_i18n = {
	"en": {
		//English
		"i.menuLogin"				: "Login",
		"i.menuExamples"			: "Load examples",
		"i.menuLanguage"			: "Change language",
		"i.menuReload"				: "Reload exercise",
		"i.menuExitExercise"		: "Leave exercise",
		"i.menuCreateTest"			: "Create Test",
		"i.menuCreateResource"		: "Create new resource",
		"i.menuCreateExercise"		: "Create Exercise",
		"i.menuMetadata"			: "Metadata",
		"i.menuPreview"				: "Preview",
		"i.menuSaveLS"				: "Save resource locally",
		"i.menuSaveFile"			: "Save resource to file",
		"i.menuExportSCORM"			: "Export to SCORM",
		"i.menuLoadLS"				: "Load resource locally",
		"i.menuLoadFile"			: "Load file",
		"i.menuLoadURL"				: "Load file via URL",
		"i.menuSaveFileViewer"		: "Export solution to file",
		"i.menuEditionView"			: "Edition View",
		"i.menuScoreView"			: "Write score function",
		"i.menuHybridView"			: "Hybrid View",
		"i.menuResultView"			: "Result View",
		"i.menuRunCode"				: "Run Code",
		"i.menuSetings"				: "Settings",
		"i.menuFullScreen"			: "Fullscreen",

		"i.exerciseTitle"			: "Exercise title",
		"i.testTitle"				: "Test title",
		"i.untitled"				: "Untitled",
		"i.description"				: "Description",
		"i.createNewExercise"		: "Create new exercise",
		"i.settingsPanelOptions"	: "Options",
		"i.settingsPanelMode"		: "Mode",
		"i.settingsPanelTheme"		: "Theme",
		"i.settingsPanelFontSize"	: "Font size",
		"i.ScorePanelTitle"			: "Score function",
		"i.ScorePanelVars"			: "Variables of the exercise",
		"i.ScorePanelAddVar"		: "Add variable",
		"i.delete"					: "Delete",
		"i.htmlPanelLibraries"		: "Libraries",
		"i.previewDialogTitle"		: "Preview",
		"i.createTestConfirmation"	: "Are you sure you want to convert this exercise into a test?",
		"i.createResourceConfirmation"	: "If you create a new resource you will lose all the changes you haven't saved. Are you sure you want to do it?",
		"i.deleteExerciseConfirmation"	: "Are you sure you want to delete this exercise?",
		"i.reloadExerciseConfirmation"	: "If you reload the exercise you will lose all your changes. Are you sure you want to do it?",
		"i.noExerciseToReload"			: "There is no exercise to reload.",
		"i.deleteResourceConfirmation"	: "Are you sure you want to delete this resource?",
		"i.quitExerciseConfirmation"	: "If you leave the exercise you will lose all your changes. Are you sure you want to do it?",
		"i.fileSaverSupportDeny"		: "Sorry, your web browser can not download files.",
		"i.fileReaderSupportDeny"		: "Sorry, your web browser can not read files.",
		"i.savedSuccessfully"			: "Saved correctly",
		"i.invalidResourceToLoad"		: "The resource to be loaded is invalid.",
		"i.resourceHasErrors"			: "The resource to be saved has errors",
		"i.initNextExercise"			: "Init next exercise",
		"i.viewMoreExercises"			: "View more exercises",
		"i.finishTest"					: "Congratulations, you have completed the test '#{test}'!",
		"i.loginAs"						: "Logged as: #{name}",
		"i.librariesHeadRequired"		: "You should include a header <head> to add libraries.",
		"i.invalidResourceURL"			: "The URL of the resource is not valid.",
		"i.errorLoadingResourceURL"		: "Error loading external resource from #{url}",
		"i.errorReadingFile"			: "There was an error reading the file.",
		"i.fileFormatNotSupported"		: "File format is not supported.",
		"i.closeConsole"				: "Close console",
		"i.minimizeConsole"				: "Minimize console",
		"i.maximizeConsole"				: "Mazimize console",
		"i.executionError"				: "There was a runtime error.",
		"i.noCodeToExecute"				: "No code was found to be executed.",
		"i.errorOnJSExecution"			: "Error",
		"i.jsExecutionNoResult1"		: "No result was found.",
		"i.jsExecutionNoResult2"		: "Include a 'return' statement or store the result in a variable named 'result'.",
		"i.scoreCorrectSolution"		: "¡The solution is correct!",
		"i.scoreIncorrectSolution"		: "The solution is not correct.",
		"i.successes"					: "Successes",
		"i.errors"						: "Errors",
		"i.feedback"					: "Feedback",
		"i.score"						: "Score",
		"i.notification"				: "Notification",
		"i.console"						: "Console",
		"i.result"						: "Result",
		"i.storedResources"				: "Stored resources",
		"i.open"						: "Open",
		"i.savedAt"						: "Saved at #{date}",
		"i.loadFileURLTitle"			: "Load file from Internet",
		"i.loadFileURLBody"				: "Type the URL of the file to load:",
		"i.load"						: "Load",
		"i.solution"					: "Solution",
		"i.exitConfirmation"			: "You are about to leave CODEditor. You will lose any changes you have not saved.",

		"i.validationInvalidJSON"		: "Invalid json. Is not an object.",
		"i.validationInvalidType"		: "Invalid 'type' value.",
		"i.validationInvalidTestType"	: "Type is not 'test'.",
		"i.validationInvalidExerciseType"	: "Type is not 'exercise'.",
		"i.validationInvalidExercises"	: "Invalid exercises.",
		"i.validationNoExercises"		: "There are no exercises.",
		"i.ExerciseNotValidInTest"		: "Exercise not valid found.",
		"i.validationInvalidEMode"		: "Invalid editorMode.",
		"i.validationInvalidTitle"		: "Invalid title.",
		"i.validationInvalidDescription"	: "Invalid description.",
		"i.validationInvalidContent"	: "Invalid content.",
		"i.validationInvalidSFunction"	: "Invalid score function.",
		"i.validationInvalidSFunctionType"		: "The score function is not a function.",
		"i.validationInvalidSFunctionScore"		: "The score function returns an object with an invalid or missing 'score' field.",
		"i.validationInvalidSFunctionSuccess"	: "The score function returns an object with an invalid 'successes' array.",
		"i.validationInvalidSFunctionError"		: "The score function returns an object with an invalid 'errors' array.",
		"i.validationInvalidSFunctionFeedback"	: "The score function returns an object with an invalid 'feedback' array.",
		"i.validationInvalidSFunctionValue"		: "The score function returns an invalid value.",
		"i.validationInvalidSFunctionException"	: "Exception raised in score function: #{exception}",

		"i.metadata_title"				: "Metadata",
		"i.metadata_eobjectives"		: "Educational objectives",
		"i.metadata_keywords"			: "Keywords",
		"i.metadata_language"			: "Language",
		"i.metadata_diffculty"			: "Difficulty",
		"i.metadata_tlt"				: "Typical learning time",
		"i.Hours"						: "Hours",
		"i.Minutes"						: "Minutes",
		"i.Seconds"						: "Seconds",
		"i.metadata_age_range"			: "Age range",
		"i.unspecified"					: "unspecified",
		"i.invalidValue"				: "invalid value",
		"i.lom_difficulty_veasy"		: "very easy",
		"i.lom_difficulty_easy"			: "easy",
		"i.lom_difficulty_medium"		: "medium",
		"i.lom_difficulty_difficult"	: "difficult",
		"i.lom_difficulty_vdifficult"	: "very difficult",
		"i.keywords.add"				: "Add keywords",
		"i.keywords.limitReached"		: "You can't add more keywords"
	},

	"es": {
		//Español
		"i.menuLogin"				: "Login",
		"i.menuExamples"			: "Cargar ejemplos",
		"i.menuLanguage"			: "Cambiar lenguaje",
		"i.menuReload"				: "Recargar ejercicio",
		"i.menuExitExercise"		: "Quitar ejercicio",
		"i.menuCreateTest"			: "Crear Test",
		"i.menuSetUpTest"			: "Configuración del Test",
		"i.menuCreateResource"		: "Crear nuevo recurso",
		"i.menuMetadata"			: "Metadatos",
		"i.menuPreview"				: "Previsualizar",
		"i.menuSaveLS"				: "Salvar recurso localmente",
		"i.menuSaveFile"			: "Salvar recurso a fichero",
		"i.menuExportSCORM"			: "Exportar a SCORM",
		"i.menuLoadLS"				: "Cargar recurso local",
		"i.menuLoadFile"			: "Cargar fichero",
		"i.menuLoadURL"				: "Cargar fichero por URL",
		"i.menuSaveFileViewer"		: "Exportar solución a fichero",
		"i.menuEditionView"			: "Vista Edición",
		"i.menuScoreView"			: "Escribir función de corrección",
		"i.menuHybridView"			: "Vista Híbrida",
		"i.menuResultView"			: "Vista Resultado",
		"i.menuRunCode"				: "Ejecutar Código",
		"i.menuSetings"				: "Ajustes",
		"i.menuFullScreen"			: "Pantalla completa",

		"i.exerciseTitle"			: "Título del ejercicio",
		"i.testTitle"				: "Título del test",
		"i.untitled"				: "Sin título",
		"i.description"				: "Descripción",
		"i.createNewExercise"		: "Crear nuevo ejercicio",
		"i.settingsPanelOptions"	: "Opciones",
		"i.settingsPanelMode"		: "Modo",
		"i.settingsPanelTheme"		: "Tema",
		"i.settingsPanelFontSize"	: "Tamaño de fuente",
		"i.ScorePanelTitle"			: "Función score",
		"i.ScorePanelVars"			: "Variables del ejercicio",
		"i.ScorePanelAddVar"		: "Añadir variable",
		"i.delete"					: "Borrar",
		"i.htmlPanelLibraries"		: "Librerías",
		"i.previewDialogTitle"		: "Vista Previa",
		"i.createTestConfirmation"	: "¿Estás seguro de que quieres convertir este ejercicio en un Test?",
		"i.createResourceConfirmation"	: "Si creas un nuevo recurso perderás los cambios que no hayas guardado. ¿Estás seguro de que deseas hacerlo?",
		"i.deleteExerciseConfirmation"	: "¿Estás seguro de que deseas borrar este ejercicio?",
		"i.reloadExerciseConfirmation"	: "Si recargas el ejercicio perderás todos tus cambios. ¿Estás seguro de que deseas hacerlo?",
		"i.noExerciseToReload"			: "No hay ningún ejercicio que reiniciar.",
		"i.deleteResourceConfirmation"	: "¿Estás seguro de que quieres borrar este recurso?",
		"i.quitExerciseConfirmation"	: "Si abandonas el ejercicio perderás todos tus cambios. ¿Estás seguro de que deseas hacerlo?",
		"i.fileSaverSupportDeny"		: "Lo siento, tu navegador no puede descargar ficheros.",
		"i.fileReaderSupportDeny"		: "Lo siento, tu navegador no puede leer ficheros.",
		"i.savedSuccessfully"			: "Salvado correctamente",
		"i.invalidResourceToLoad"		: "El recurso a cargar es inválido",
		"i.resourceHasErrors"			: "El recurso a salvar tiene errores",
		"i.initNextExercise"			: "Iniciar siguiente ejercicio",
		"i.viewMoreExercises"			: "Ver más ejercicios",
		"i.finishTest"					: "¡Enhorabuena, has completado el test '#{test}'!",
		"i.loginAs"						: "Logueado como: #{name}",
		"i.librariesHeadRequired"		: "Debes incluir una cabecera <head> para añadir librerías.",
		"i.invalidResourceURL"			: "La URL del recurso no es válida.",
		"i.errorLoadingResourceURL"		: "Error al cargar el recurso externo desde #{url}",
		"i.errorReadingFile"			: "Se produjo un error leyendo el fichero.",
		"i.fileFormatNotSupported"		: "Formato de fichero no soportado.",
		"i.closeConsole"				: "Cerrar consola",
		"i.minimizeConsole"				: "Minimizar consola",
		"i.maximizeConsole"				: "Maximizar consola",
		"i.executionError"				: "Se produjo un error de ejecución.",
		"i.noCodeToExecute"				: "No se ha enviado ningún código para ser ejecutado.",
		"i.errorOnJSExecution"			: "Error",
		"i.jsExecutionNoResult1"		: "No se encontró ningún resultado.",
		"i.jsExecutionNoResult2"		: "Incluya una sentencia 'return' o almacene el resultado en una variable de nombre 'result'.",
		"i.scoreCorrectSolution"		: "¡La solución es correcta!",
		"i.scoreIncorrectSolution"		: "La solución no es correcta.",
		"i.successes"					: "Aciertos",
		"i.errors"						: "Errores",
		"i.feedback"					: "Feedback",
		"i.score"						: "Puntuación",
		"i.notification"				: "Notificación",
		"i.console"						: "Consola",
		"i.result"						: "Resultado",
		"i.storedResources"				: "Recursos guardados",
		"i.open"						: "Abrir",
		"i.savedAt"						: "Salvado el #{date}",
		"i.loadFileURLTitle"			: "Cargar fichero de Internet",
		"i.loadFileURLBody"				: "Introduzca la URL del fichero a cargar:",
		"i.load"						: "Cargar",
		"i.solution"					: "Solución",
		"i.exitConfirmation"			: "Vas a abandonar CODEditor. Se perderán todos los cambios que no hayas salvado.",

		"i.validationInvalidJSON"		: "JSON inválido. No es un objeto.",
		"i.validationInvalidType"		: "El valor de 'type' no es válido.",
		"i.validationInvalidTestType"	: "Tipo no es 'test'.",
		"i.validationInvalidExerciseType"	: "Tipo no es 'exercise'.",
		"i.validationInvalidExercises"	: "Ejercicios inválidos.",
		"i.validationNoExercises"		: "No hay ejercicios.",
		"i.ExerciseNotValidInTest"		: "Se encontró un ejercicio inválido.",
		"i.validationInvalidEMode"		: "'editorMode' no es válido.",
		"i.validationInvalidTitle"		: "Título inválido.",
		"i.validationInvalidDescription"	: "La descripción no es válida.",
		"i.validationInvalidContent"	: "El contenido no es válido.",
		"i.validationInvalidSFunction"	: "La función 'score' no es válida.",
		"i.validationInvalidSFunctionType"		: "La función 'score' no es una función.",
		"i.validationInvalidSFunctionScore"		: "La función 'score' devuelve un objeto con un campo 'score' inválido o ausente.",
		"i.validationInvalidSFunctionSuccess"	: "La función 'score' devuelve un objeto con un array 'successes' inválido.",
		"i.validationInvalidSFunctionError"		: "La función 'score' devuelve un objeto con un array 'errors' inválido.",
		"i.validationInvalidSFunctionFeedback"	: "La función 'score' devuelve un objeto con un array 'feedback' inválido.",
		"i.validationInvalidSFunctionValue"		: "La función 'score' devuelve un valor inválido.",
		"i.validationInvalidSFunctionException"	: "Se produjo una excepción en la función 'score': #{exception}",

		"i.metadata_title"				: "Metadatos",
		"i.metadata_eobjectives"		: "Objetivos educativos",
		"i.metadata_keywords"			: "Palabras clave",
		"i.metadata_language"			: "Idioma",
		"i.metadata_diffculty"			: "Dificultad",
		"i.metadata_tlt"				: "Tiempo de aprendizaje típico",
		"i.Hours"						: "Horas",
		"i.Minutes"						: "Minutos",
		"i.Seconds"						: "Segundos",
		"i.metadata_age_range"			: "Rango de edad",
		"i.unspecified"					: "sin especificar",
		"i.invalidValue"				: "valor inválido",
		"i.lom_difficulty_veasy"		: "muy fácil",
		"i.lom_difficulty_easy"			: "fácil",
		"i.lom_difficulty_medium"		: "media",
		"i.lom_difficulty_difficult"	: "difícil",
		"i.lom_difficulty_vdifficult"	: "muy difícil",
		"i.keywords.add"				: "Añadir palabras clave",
		"i.keywords.limitReached"		: "No puedes añadir más palabras clave"
	}

};