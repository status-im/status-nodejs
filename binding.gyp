{
  "targets": [{
    "target_name": "binding",
    "sources": [
      "./src/status.cpp"
    ],
    "xcode_settings": {
		"MACOSX_DEPLOYMENT_TARGET": "10.7"
	  },
    "libraries": [
      "<!(pwd)/bin/libstatus.a"
    ],
    "conditions": [
      ["OS=='mac'", {
        "libraries": [
          "-framework IOKit",
          "-framework CoreFoundation",
          "-framework CoreServices",
          "-framework Security"
        ]
      }]
    ]
  }]
}
