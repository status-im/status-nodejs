const status = require(".")

status.OpenAccounts("/tmp")
status.InitKeystore("/tmp")
console.log("INT")

const PATH_WALLET_ROOT = "m/44'/60'/0'/0"
const PATH_EIP_1581 = "m/43'/60'/1581'"
const PATH_DEFAULT_WALLET = PATH_WALLET_ROOT + "/0"
const PATH_WHISPER = PATH_EIP_1581 + "/0'/0"
const testPassword = "testPassword"

const { v4: uuidv4 } = require('uuid');

const installationId = uuidv4();

let DEFAULT_NETWORKS =  [
  {
    "id": "testnet_rpc",
    "etherscan-link": "https://ropsten.etherscan.io/address/",
    "name": "Ropsten with upstream RPC",
    "config": {
      "NetworkId": 3,
      "DataDir": "/ethereum/testnet_rpc",
      "UpstreamConfig": {
        "Enabled": true,
        "URL": "https://ropsten.infura.io/v3/f315575765b14720b32382a61a89341a"
      }
    }
  },
  {
    "id": "rinkeby_rpc",
    "etherscan-link": "https://rinkeby.etherscan.io/address/",
    "name": "Rinkeby with upstream RPC",
    "config": {
      "NetworkId": 4,
      "DataDir": "/ethereum/rinkeby_rpc",
      "UpstreamConfig": {
        "Enabled": true,
        "URL": "https://rinkeby.infura.io/v3/f315575765b14720b32382a61a89341a"
      }
    }
  },
  {
    "id": "goerli_rpc",
    "etherscan-link": "https://goerli.etherscan.io/address/",
    "name": "Goerli with upstream RPC",
    "config": {
      "NetworkId": 5,
      "DataDir": "/ethereum/goerli_rpc",
      "UpstreamConfig": {
        "Enabled": true,
        "URL": "https://goerli.blockscout.com/"
      }
    }
  },
  {
    "id": "mainnet_rpc",
    "etherscan-link": "https://etherscan.io/address/",
    "name": "Mainnet with upstream RPC",
    "config": {
      "NetworkId": 1,
      "DataDir": "/ethereum/mainnet_rpc",
      "UpstreamConfig": {
        "Enabled": true,
        "URL": "https://mainnet.infura.io/v3/f315575765b14720b32382a61a89341a"
      }
    }
  },
  {
    "id": "xdai_rpc",
    "name": "xDai Chain",
    "config": {
      "NetworkId": 100,
      "DataDir": "/ethereum/xdai_rpc",
      "UpstreamConfig": {
        "Enabled": true,
        "URL": "https://dai.poa.network"
      }
    }
  },
  {
    "id": "poa_rpc",
    "name": "POA Network",
    "config": {
      "NetworkId": 99,
      "DataDir": "/ethereum/poa_rpc",
      "UpstreamConfig": {
        "Enabled": true,
        "URL": "https://core.poa.network"
      }
    }
  }
]

var NODE_CONFIG = {
  "BrowsersConfig": {
    "Enabled": true
  },
  "ClusterConfig": {
    "BootNodes": [
      "enode://23d0740b11919358625d79d4cac7d50a34d79e9c69e16831c5c70573757a1f5d7d884510bc595d7ee4da3c1508adf87bbc9e9260d804ef03f8c1e37f2fb2fc69@47.52.106.107:443",
      "enode://5395aab7833f1ecb671b59bf0521cf20224fe8162fc3d2675de4ee4d5636a75ec32d13268fc184df8d1ddfa803943906882da62a4df42d4fccf6d17808156a87@178.128.140.188:443",
      "enode://6e6554fb3034b211398fcd0f0082cbb6bd13619e1a7e76ba66e1809aaa0c5f1ac53c9ae79cf2fd4a7bacb10d12010899b370c75fed19b991d9c0cdd02891abad@47.75.99.169:443",
      "enode://5405c509df683c962e7c9470b251bb679dd6978f82d5b469f1f6c64d11d50fbd5dd9f7801c6ad51f3b20a5f6c7ffe248cc9ab223f8bcbaeaf14bb1c0ef295fd0@35.223.215.156:443"
    ],
    "Enabled": true,
    "Fleet": "eth.prod",
    "RendezvousNodes": [
      "/ip4/34.70.75.208/tcp/30703/ethv4/16Uiu2HAm6ZsERLx2BwVD2UM9SVPnnMU6NBycG8XPtu8qKys5awsU",
      "/ip4/178.128.140.188/tcp/30703/ethv4/16Uiu2HAmLqTXuY4Sb6G28HNooaFUXUKzpzKXCcgyJxgaEE2i5vnf",
      "/ip4/47.52.106.107/tcp/30703/ethv4/16Uiu2HAmEHiptiDDd9gqNY8oQqo8hHUWMHJzfwt5aLRdD6W2zcXR"
    ],
    "StaticNodes": [
      "enode://887cbd92d95afc2c5f1e227356314a53d3d18855880ac0509e0c0870362aee03939d4074e6ad31365915af41d34320b5094bfcc12a67c381788cd7298d06c875@178.128.141.0:443",
      "enode://fbeddac99d396b91d59f2c63a3cb5fc7e0f8a9f7ce6fe5f2eed5e787a0154161b7173a6a73124a4275ef338b8966dc70a611e9ae2192f0f2340395661fad81c0@34.67.230.193:443"
    ],
    "TrustedMailServers": [
      "enode://2c8de3cbb27a3d30cbb5b3e003bc722b126f5aef82e2052aaef032ca94e0c7ad219e533ba88c70585ebd802de206693255335b100307645ab5170e88620d2a81@47.244.221.14:443",
      "enode://ee2b53b0ace9692167a410514bca3024695dbf0e1a68e1dff9716da620efb195f04a4b9e873fb9b74ac84de801106c465b8e2b6c4f0d93b8749d1578bfcaf03e@104.197.238.144:443",
      "enode://8a64b3c349a2e0ef4a32ea49609ed6eb3364be1110253c20adc17a3cebbc39a219e5d3e13b151c0eee5d8e0f9a8ba2cd026014e67b41a4ab7d1d5dd67ca27427@178.128.142.94:443",
      "enode://7aa648d6e855950b2e3d3bf220c496e0cae4adfddef3e1e6062e6b177aec93bc6cdcf1282cb40d1656932ebfdd565729da440368d7c4da7dbd4d004b1ac02bf8@178.128.142.26:443",
      "enode://c42f368a23fa98ee546fd247220759062323249ef657d26d357a777443aec04db1b29a3a22ef3e7c548e18493ddaf51a31b0aed6079bd6ebe5ae838fcfaf3a49@178.128.142.54:443",
      "enode://30211cbd81c25f07b03a0196d56e6ce4604bb13db773ff1c0ea2253547fafd6c06eae6ad3533e2ba39d59564cfbdbb5e2ce7c137a5ebb85e99dcfc7a75f99f55@23.236.58.92:443"
    ]
  },
  "DataDir": "./ethereum/mainnet",
  "EnableNTPSync": true,
  "KeyStoreDir": "./keystore",
  "ListenAddr": ":30305",
  "LogEnabled": true,
  "LogFile": "geth.log",
  "LogLevel": "INFO",
  "MailserversConfig": {
    "Enabled": true
  },
  "Name": "StatusDesktop",
  "NetworkId": 1,
  "NoDiscovery": false,
  "PermissionsConfig": {
    "Enabled": true
  },
  "Rendezvous": true,
  "RequireTopics": {
    "whisper": {
      "Max": 2,
      "Min": 2
    }
  },
  "ShhextConfig": {
    "BackupDisabledDataDir": "./",
    "DataSyncEnabled": true,
    "InstallationID": installationId,
    "MailServerConfirmations": true,
    "MaxMessageDeliveryAttempts": 6,
    "PFSEnabled": true,
    "VerifyENSContractAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    "VerifyENSURL": "https://mainnet.infura.io/v3/f315575765b14720b32382a61a89341a",
    "VerifyTransactionChainID": 1,
    "VerifyTransactionURL": "https://mainnet.infura.io/v3/f315575765b14720b32382a61a89341a"
  },
  "StatusAccountsConfig": {
    "Enabled": true
  },
  "UpstreamConfig": {
    "Enabled": true,
    "URL": "https://mainnet.infura.io/v3/f315575765b14720b32382a61a89341a"
  },
  "WakuConfig": {
    "Enabled": true,
    "LightClient": true,
    "MinimumPoW": 0.001
  },
  "WalletConfig": {
    "Enabled": true
  }
}

let multiAccountConfig = {
    "n": 5,
    "mnemonicPhraseLength": 12,
    "bip39Passphrase": "",
    "paths": [PATH_WALLET_ROOT, PATH_EIP_1581, PATH_WHISPER, PATH_DEFAULT_WALLET]
  }


function getAccountSettings(account) {
  return {
    "key-uid": account.keyUid,
    "mnemonic": account.mnemonic,
    "public-key": account.derived[PATH_WHISPER].publicKey,
    "name": account.name,
    "address": account.address,
    "eip1581-address": account.derived[PATH_EIP_1581].address,
    "dapps-address": account.derived[PATH_DEFAULT_WALLET].address,
    "wallet-root-address": account.derived[PATH_WALLET_ROOT].address,
    "preview-privacy?": true,
    "networks/networks": DEFAULT_NETWORKS,
    "signing-phrase": "a b c",
    "log-level": "INFO",
    "latest-derived-path": 0,
    "currency": "usd",
    "waku-enabled": true,
    "wallet/visible-tokens": {
      "mainnet": ["SNT"]
    },
    "appearance": 0,
    "networks/current-network": "mainnet_rpc",
    "installation-id": installationId
  }
}
var derivedAccount = JSON.parse(status.MultiAccountGenerateAndDeriveAddresses(JSON.stringify(multiAccountConfig)))[0]
  let multiAccount = {
    "accountID": derivedAccount.id,
    "paths": [PATH_WALLET_ROOT, PATH_EIP_1581, PATH_WHISPER, PATH_DEFAULT_WALLET],
    "password": testPassword
  }

console.log(status.MultiAccountStoreDerivedAccounts(JSON.stringify(multiAccount)))
var settings = getAccountSettings(derivedAccount)
var accountData = {
  name: "test name",
  address: derivedAccount.address,
  "key-uid": derivedAccount.keyUid,
}

  let subaccountData = [
    {
      "public-key": derivedAccount.derived[PATH_DEFAULT_WALLET].publicKey,
      "address": derivedAccount.derived[PATH_DEFAULT_WALLET].address,
      "color": "#4360df",
      "wallet": true,
      "path": PATH_DEFAULT_WALLET,
      "name": "Status account"
    },
    {
      "public-key": derivedAccount.derived[PATH_WHISPER].publicKey,
      "address": derivedAccount.derived[PATH_WHISPER].address,
      "name": "",
      "photo-path": "",
      "path": PATH_WHISPER,
      "chat": true
    }
  ]
console.log(status.SaveAccountAndLogin(JSON.stringify(accountData), testPassword, JSON.stringify(settings), JSON.stringify(NODE_CONFIG), JSON.stringify(subaccountData)))

var advertiseChat = "status-test-echo-bot";

function saveChat(chatId, chatType) {
status.CallPrivateRPC(JSON.stringify(
  {"method": "wakuext_saveChat",
   "params": [{"active": true, "id": chatId, "chatType": chatType}]}))
status.CallPrivateRPC(JSON.stringify(
  {"method": "wakuext_join",
   "params": [{"active": true, "id": chatId, "chatType": chatType}]}))
  loadFilters();
}

function loadFilters() {
status.CallPrivateRPC(JSON.stringify(
  {"method": "wakuext_loadFilters",
   "params": [[]]}))

}
function init() {
console.log(status.CallPrivateRPC(JSON.stringify(
  {"method": "wakuext_startMessenger",
   "params": [true]})))
  saveChat(advertiseChat, 2);

}


function sendMessage(chatId, text) {
  return status.CallPrivateRPC(JSON.stringify(
    {"method": "wakuext_sendChatMessage",
      "params": [{"contentType": 1, "chatId": chatId, "text": text}]}))

}
function advertise() {
  sendMessage(advertiseChat, "hello, I am your friendly echo bot!");
}

setInterval(advertise, 3000);

/*
{ id: '0x2ae6ab086c67d21688be329b853fbd62dc62b8e63c2587e1ab02fe8921556ee5',
  whisperTimestamp: 1594282484000,
  from: '0x04f882637798da4696ab989e3790b31e8eaf59ac874e52205d6f4c03ee3228cf14086a9ab7af62093d591dd0c9d2e33578235372524cf0cd38320cb0054d3be62e',
  alias: 'Potable Sparkling Xantus',
  identicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAkElEQVR4nOzWwQmEUAwG4V2xF0uwMcuwMUuwGr2LghICw898x2V5MgRChl8IQ2gMoTGExhCamJCx6+F9W4+736d5+Xd8L2YihtAYQlPeIE/b6avqNouZiCE0htC8vrW6b6fq+zETMYTGEBpvLRpDaAyhabu1uv9/FTMRQ2gMUZOYiRhCYwiNITSG0JwBAAD//wjjIGek6HOdAAAAAElFTkSuQmCC',
  seen: false,
  quotedMessage: null,
  rtl: false,
  parsedText: [ { type: 'paragraph', children: [Array] } ],
  lineCount: 0,
  text: 'yh',
  chatId: '0x041a6a0908a5d6ea1c35f6f73ef800c7f0bf792245586e3d3fac4705d18f1a22201150c40930318a6683eff728e8ebb9512ff49ec9d6da26b19caef432af7a86f3',
  localChatId: '0x04f882637798da4696ab989e3790b31e8eaf59ac874e52205d6f4c03ee3228cf14086a9ab7af62093d591dd0c9d2e33578235372524cf0cd38320cb0054d3be62e',
  clock: 1594282482521,
  replace: '',
  responseTo: '',
  ensName: '',
  sticker: null,
  commandParameters: null,
  timestamp: 1594282482521,
  contentType: 1,
  messageType: 1 }
  */

var messageIds = {};
var chatIds = {};


function handleMessages(response) {
  console.log(response);
  if (response.result && response.result.messages && response.result.messages.length) {
    response.result.messages.forEach(function(message) {
      if (!messageIds[message.id] && message.localChatId.startsWith("0x")) {
        handleMessage(message);
        messageIds[message.id] = true;
      }
    })
  }

}
setInterval(function() {
handleMessages(JSON.parse(status.CallPrivateRPC(JSON.stringify(
  {"method": "wakuext_retrieveAll",
   "params": []}))))
}, 3000);

setTimeout(function() {
  init()
}, 3000)

function handleMessage(message) {
  var theirPk = message.localChatId;
  var text = message.text;
  // Don't remove this
  if (!chatIds[theirPk]) {
    saveChat(theirPk, 1)
    chatIds[theirPk] = true;
  }


  // Send a message
  sendMessage(theirPk, text);
}

