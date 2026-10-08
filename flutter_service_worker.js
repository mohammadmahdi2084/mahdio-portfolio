'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4191be86803767c26186dd0305bd69e5",
".git/config": "dba85186c170ce9b9e63ebddd41671c8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "50eb2e6ef2a96189aa82e3a754566903",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "51f981690261ac173c51711df97f15e8",
".git/logs/refs/heads/main": "d35200c6458a008d305bc88f66efe183",
".git/logs/refs/remotes/origin/main": "1ca45094717f1b068879ba637aec4b7d",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/07afa220b9297d0eef0e9f8d458fd2f1399b4e": "76412d7b36bf12159ac305b4efa25920",
".git/objects/14/7bd7f4d672ff838e56f874d7d6027b6be8fb62": "f17eb38be9d071fb7e06f4333b9cd264",
".git/objects/16/5990ef8e0802719cf5c83fb1634c4278c7998b": "82a4a78045f63296e42dbb5d48e8be81",
".git/objects/19/2bd73247e55ac2e0f13b1e7f3c5de0c8dbd590": "8f542d5398417980b798a3bac22073e5",
".git/objects/1b/332ffbc6c87db386a5d74e42f0e09d1fbbde3a": "26cabde9ce35790ee3f566af907dca12",
".git/objects/1f/bd396ca32087a0bd7a527fbc24bb8a755e6625": "cf39bde0045879b8adcf828e68fa563f",
".git/objects/22/52b388a4622053a2cff75c302bc9c15fff7c81": "75d366bc09eee476c90f402a2ee4a304",
".git/objects/23/4491a6cd0f10ac40c0e0f252092cf0c0dd13cc": "e766932530fa460fce49b03aba51e2e2",
".git/objects/26/774bbd42a6a458b5d7c20aa4648f6118be122a": "8ec8f8c73ae0ad6b2c2db56d40b64a1e",
".git/objects/31/49ae64cca5dcb95129de66a1c908cfdbf4ddbe": "8e1fceeec4b8cf02873e048d0e8ad42b",
".git/objects/36/718172bad7a003c3c921bae11ec3b5b1f61136": "e0d37f3e8199dc543a69fe3d8cdc9b15",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3c/7577ee5b660adad971c658f98fd821b6555a5c": "970b01b94a3aac72c65f3c2c9c71e00d",
".git/objects/3d/0f7891c5e7a88486540ec610902f3781de79e8": "1798f8a8588bc5b2cf43937f016adf12",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a4cf88596b1f8b61a31504248187cf3f82a191": "7c56e839a85e4d426f7d68f9670e9c73",
".git/objects/4b/eb2a8dc49a33f593247dd4eca60865aed64077": "ba5521ae594f28afd4484522f8efde57",
".git/objects/50/5e3314a0c37e8c1968bec8bb5673a26f704b61": "23cc7bfe7c8486ba7e962481c1ed144e",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/f3c05ae3f42683f843a1aec0a629e5bbbf8212": "327e4752efe866be2d03993e40c59ef0",
".git/objects/56/9d044e46355971e6fad137900ffe859321df89": "68296b24ee8a93fe85837ed19aa63a7e",
".git/objects/65/eb7d95b0dc4ca78add0c5195da978ca73220cb": "591e641358061ce326cc1ab62c259ed4",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/71/27dd22ec38a17b5f2741e78c5dac21d9997186": "bf84afaa929a467438571fafca400223",
".git/objects/78/3b64abe57426714ca84ac7c9545588463ee1a3": "c24373d103998154392fde882bc58b0e",
".git/objects/78/936fc553e02877a3aee6e1725afe071d69bc0c": "96bcb0bd0ca292b03b5dbd6525d2be09",
".git/objects/79/f5d642a801da3970786d3c2317f705750a98b8": "98fc7ce89290dba78be905e7cb9e0e6c",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/f03a123aaac5fc0955ba2a455d729fa494c043": "d3071f1129f8d69a2ed1555b2e395604",
".git/objects/7f/0f0e70ac2ff2a720b72c24bff88104c57d2f04": "fedc6a37ffdd89e13b5c60ef166ee83f",
".git/objects/83/fafc8a682f47bcda23522f5ff0566797f5d18c": "4d9b6353fc5b1bd3cdaee23dfb9ca18e",
".git/objects/84/d3ee78be23c9d95abffccf1477791da1c2d52e": "b32161e1547d45b2ec70cef65bd33191",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/fc94317d5fa1090a1f68feb452b24d7b1340c9": "ad00d648c4b3ac8160858811c7d425c9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/7ce7a705e0af262e8feb43c42e0bbf85427e0f": "ee5e130bfcc1bdec882baa5f615aff2d",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/a3ac587e1094acd0ef9012ccb3cf5df3a59c90": "a6541116472303c1917769e14e7b714c",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9e/22c9857af7d6a228c5134b9f087564a3be0a61": "97fe83bd674e835cf52503a38ff3f2f8",
".git/objects/a5/784b35f4d1b631de7b8c3f460ed1cc6cf6c2e6": "eeaf7f0f1d5735ed5c7cc340597378ec",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/c10d233fb0e82bf4eac4f62796eb7171f42e1d": "06af14c9939ba411be20b2c071d48493",
".git/objects/a9/d12a08d211eb44b1324bf0cee675f0ab7cb4c3": "1593d89e46c3db0ec7f6d12c4066d560",
".git/objects/aa/447c78f386cecfa63bd672d5dc9236ed50e465": "5ad5b39e08037005c8d6fce811e1b849",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/801b54dea84c0d759bf3afaa240ce07d34aa39": "9a01418e227b4bf8465a240d5bcfc429",
".git/objects/ae/d5d86e4c8c8fb403ad46ffc0f78a1d890b14db": "5b616b639d32e27654a9808a4037ac67",
".git/objects/af/387a051a72634dac46dabf70e432cbf68c80e6": "99393863e588e289125258276e54f0b5",
".git/objects/af/a1492f9be81a53fcbeec7e0b3e6e28833f95b9": "a19c8067ebba5aabfc2e1991d9a7539b",
".git/objects/af/bbbd7f8d375b532f5309d4f5dcb581599cdc42": "2a9350398942085bb5cecb8c5ab23f0b",
".git/objects/b3/efc2504893a93d3236d2cdd6172c9c5ef82bf6": "12f3e1879b013527e1510fe7a88ccd33",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/be/10c5825a7c4479ead0cfd68e8eb53670b6e450": "5bcae2a6348e0d517221aca02a146d9c",
".git/objects/be/cb9e70281cee410cd39583502f344a3bf36e93": "e28ccb0fb4bcdec2a5ba69fdce748e4a",
".git/objects/bf/4626bf1cf328befe2091cfa5722e156d8acfd5": "952993341044f52940d0517515affe34",
".git/objects/c2/b33dff98b056821cf934c2118903103d8eaea8": "fdf9e025c47471206934c5b47b7169ee",
".git/objects/c3/8c1274c4f35b09f5f2c8625530b42b943a4ac0": "3d9f59280ec420be370bdd9c442e7173",
".git/objects/c5/730f9a2b76a76116c7f2cd15fe71e992bb592e": "c21b6996b8bb7377ed0221892911f67c",
".git/objects/c6/a17ef89293e78efe138681ac2de51248708812": "27eb6217f383cbae69c441562f3edc23",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/94e74ecec8354300a946f4e51af58027befe15": "7d7ccbed8f3874f6f226d8422c735238",
".git/objects/c9/88757307cce9540fd02f03f2a149631cd26baf": "5cf7e51460b9aa66cfeb6bc2a674cec6",
".git/objects/ca/35352b121cc69e1065055618842f1b6762dc4d": "e2b72bf9608bf7ba57f5773ba1a0374e",
".git/objects/cf/1aea41ff16156b97f4be1b389891c6f1061a19": "bbea8349714e0c0ea71f1c786b90fe60",
".git/objects/d1/161250c8e5382bdc549bcb5ceef5716d572b4d": "8c97243bd03b9280de91624e508e7eed",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/dcb0d3500a33d727b1f5104d4817ae5f10b95d": "05f5c6b1130f03d7738f89be9cb757dc",
".git/objects/df/c1a2ef15a3164939f260e5c0bbf1f9bd8589c0": "9bba5df5d4bccd5c9423687cdea56bcd",
".git/objects/df/d65b7ef04473c98a7d52c88fb3663318269bae": "ef4e97b3753d56773df6eb1d95b5b6d7",
".git/objects/e3/492ed66a4eb53fe75d95d0e213eed0a595d188": "785acb838845613e6f406b147b03e598",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "f3e1e31a90a8056b2f8fd5f8522d0ba9",
".git/refs/remotes/origin/main": "f3e1e31a90a8056b2f8fd5f8522d0ba9",
"assets/AssetManifest.bin": "d942a022917e152e20e7b8d3b8b23efb",
"assets/AssetManifest.bin.json": "76fab0948d25a9dd66ed96b7e6581bce",
"assets/assets/images/ability/0.png": "ba5a3f3856d919ee91269981d89a3e57",
"assets/assets/images/ability/1.png": "359219d6c41e324a2ee1ee0bd2345011",
"assets/assets/images/ability/2.png": "34657d966ec90e641aacfdd8d0689cc9",
"assets/assets/images/ability/3.png": "eee2dcd9b6bd6394ac9e6d8b98bc80d2",
"assets/assets/images/call.webp": "41cb3c403097985a6a49c7f32b880b4e",
"assets/assets/images/car.webp": "5f2a74ad44b490e9bf9773df8ae86ca7",
"assets/assets/images/girl.png": "d820a3d616f84734d3f421b2eab2f9c3",
"assets/assets/images/header.webp": "c7cdb2f31ba75cac7e6e841a5550d6c7",
"assets/assets/images/laptop.png": "4bfc73a32df34337cb362184dcccc336",
"assets/assets/images/logo.png": "bb4ef0aa36cb848fead2007bb464e7e2",
"assets/assets/images/mafia.webp": "a096c52b700b836b1b513c2b323ae887",
"assets/assets/images/margin.png": "3c73dccaa331c156a501970e0ac6afe7",
"assets/assets/images/rocket.png": "c914b1f6d7f5f93d5cc9077cc452d602",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "13f967e9ab0013afdcb7c195830bb684",
"assets/NOTICES": "f5336f4102da1705d558895bf0572a54",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "a411c334e203c553ded47350683a1eed",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "8b735c30770350f02554506d35722683",
"icons/Icon-192.png": "32f93ecc620ade811369b4ceda7d4f78",
"icons/Icon-512.png": "d62e1a928a5a51de11ae6ca252cbddd3",
"icons/Icon-maskable-192.png": "32f93ecc620ade811369b4ceda7d4f78",
"icons/Icon-maskable-512.png": "d62e1a928a5a51de11ae6ca252cbddd3",
"index.html": "fef0f716e3bf20a084c312eef4e41fc6",
"/": "fef0f716e3bf20a084c312eef4e41fc6",
"main.dart.js": "09236c3065cb77416ebf04288ba394e1",
"manifest.json": "8ef0ee76e7289be6c3f0d21d74d36df7",
"README.md": "7acd320258cfc157fc2a27bb243ae5d5",
"version.json": "9539520d583fd57c4e77f5390d5a7fae"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
