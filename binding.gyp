{
  "targets": [{
    "target_name": "<(module_name)",
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
  }, {
    "target_name": "action_after_build",
    "type": "none",
    "dependencies": ["<(module_name)"],
    "copies": [
      {
        "files": [ "<(PRODUCT_DIR)/<(module_name).node" ],
        "destination": "<(module_path)"
      }
    ]
  }]
}
