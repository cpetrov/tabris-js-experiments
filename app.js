downloader.init({folder: "testApp"});
downloader.get("https://wordpress.org/plugins/about/readme.txt");

["DOWNLOADER_initialized",
"DOWNLOADER_gotFileSystem",
"DOWNLOADER_gotFolder",
"DOWNLOADER_error",
"DOWNLOADER_noWifiConnection",
"DOWNLOADER_downloadSuccess",
"DOWNLOADER_downloadError",
"DOWNLOADER_downloadProgress",
"DOWNLOADER_unzipSuccess",
"DOWNLOADER_unzipError",
"DOWNLOADER_unzipProgress",
"DOWNLOADER_fileRemoved",
"DOWNLOADER_fileRemoveError",
"DOWNLOADER_getFileError,",
"DOWNLOADER_fileCheckSuccess",
"DOWNLOADER_fileCheckFailed",
"DOWNLOADER_fileCheckError"].forEach(function(eventName) {
  document.addEventListener(eventName, function(event){
    console.log(eventName + " fired.");
    console.log(event.data);
  });
});