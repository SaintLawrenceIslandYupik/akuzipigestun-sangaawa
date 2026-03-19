/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-b7e2fd85'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "results.html",
    "revision": "ac272263733cd6e35fa4956cfde79f16"
  }, {
    "url": "manifest.json",
    "revision": "67e1967ac7e741f988fa235c4f930565"
  }, {
    "url": "index.html",
    "revision": "d1764b254915db014eef46b8da92b3ef"
  }, {
    "url": "homepage.png",
    "revision": "561c4f82873fab270ed55d56c0b6cf08"
  }, {
    "url": "entry.html",
    "revision": "d8531d9ecf25a29e848a418bb4de919e"
  }, {
    "url": "contact.html",
    "revision": "79f93a45a3eb8a0c129c15c44ef2af49"
  }, {
    "url": "about.html",
    "revision": "692f7af8bcab8d8d1d6b72597e264aa9"
  }, {
    "url": "icons/word_wheel.png",
    "revision": "c620bffe21df54c84a7d382d3ddad6c0"
  }, {
    "url": "icons/spellchecker_hires.png",
    "revision": "3348fd8e95b8d2e032d85fa18904296d"
  }, {
    "url": "icons/spellchecker.png",
    "revision": "e0ccdbee2a2c4d8cdc78a2bb70e45e79"
  }, {
    "url": "icons/Sivuqaq_icon_old.png",
    "revision": "aafa05a0871cb89eb090a65cb65cbe98"
  }, {
    "url": "icons/Sivuqaq_icon@2x.png",
    "revision": "5ce452a79797eba9f6bad6dcd25f1ae1"
  }, {
    "url": "icons/Sivuqaq_icon.png",
    "revision": "aafa05a0871cb89eb090a65cb65cbe98"
  }, {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "3193cdb29ffd1ed1e9025c3133d7523e"
  }, {
    "url": "icons/ReportIssueButton.png",
    "revision": "91f350b46b4d8ec16a98906c53bb7bac"
  }, {
    "url": "icons/mstile-150x150.png",
    "revision": "ee2deef82de37673edf01934683172d8"
  }, {
    "url": "icons/lab_group_hires.png",
    "revision": "d722bf04a3e261df262a53fc749bdcfe"
  }, {
    "url": "icons/lab_group.png",
    "revision": "6648c472b8968c2d03bae4e919ec4e26"
  }, {
    "url": "icons/favicon.ico",
    "revision": "aeab61a66e02e8dba34bd2e9c6cb4241"
  }, {
    "url": "icons/favicon-32x32.png",
    "revision": "0330c90422b5ca69a1fc9a92d517d9ad"
  }, {
    "url": "icons/favicon-16x16.png",
    "revision": "145d4e46e0d97f84a90bc83969564d40"
  }, {
    "url": "icons/entry_diagram.png",
    "revision": "2e04974e6473d59fd2d7481d54f162ec"
  }, {
    "url": "icons/corpus_hires.png",
    "revision": "331828a31efcb98b24a776c7d1fe7310"
  }, {
    "url": "icons/corpus.png",
    "revision": "fbc7b541049c603bf30b9b80cdb28833"
  }, {
    "url": "icons/contact_hires.png",
    "revision": "a90f768e45f483158af67513037e8908"
  }, {
    "url": "icons/contact.png",
    "revision": "066c122884f5f59004f1f1c21d9d021f"
  }, {
    "url": "icons/apple-touch-icon.png",
    "revision": "0c9250cceafc7336fb902a94010af340"
  }, {
    "url": "icons/android-chrome-512x512.png",
    "revision": "1fbd5c952b11991835edeba64bf1f4ef"
  }, {
    "url": "icons/android-chrome-192x192.png",
    "revision": "a049f65e15e419aa9fc5cf91b57bae87"
  }, {
    "url": "icons/analyzer_hires.png",
    "revision": "ee7c9d98e4a7cdd071e081b7045bccf7"
  }, {
    "url": "icons/analyzer.png",
    "revision": "88de8fa0f7e174463cfc8a3a18385ce5"
  }, {
    "url": "icons/about.png",
    "revision": "c99ca816ee8815972e11df061a0f48ac"
  }, {
    "url": "dictionary_js/wordoftheday.js",
    "revision": "6bab8550011df277a2242889779b2dec"
  }, {
    "url": "dictionary_js/wordBuilder.js",
    "revision": "0d928f06637f3fa52d335e9f0a358b7a"
  }, {
    "url": "dictionary_js/transducer_inverted.js",
    "revision": "87a3390bd24a24dda1b38979aaf2180c"
  }, {
    "url": "dictionary_js/transducer.js",
    "revision": "dfcf01bf8cd6a0c69583498f0c701a0c"
  }, {
    "url": "dictionary_js/tagSearch.js",
    "revision": "02a6459ba49516828a28d8309864f031"
  }, {
    "url": "dictionary_js/scrollButton.js",
    "revision": "e61f7fc7995d3136fb287b2d50b2606c"
  }, {
    "url": "dictionary_js/s2m.js",
    "revision": "4655bf3a2ba19e7de3391630b933acbe"
  }, {
    "url": "dictionary_js/relatedWords.js",
    "revision": "635824eb4723b44a4052cc4ac3828e70"
  }, {
    "url": "dictionary_js/postbases52125.js",
    "revision": "798240b45b6526d4637312581667d0e4"
  }, {
    "url": "dictionary_js/postbases.js",
    "revision": "e20f8fcc9ae42a7e7d0582f5066ca988"
  }, {
    "url": "dictionary_js/parseWord.js",
    "revision": "5df6036f8664cb884b0452d5cd7bd936"
  }, {
    "url": "dictionary_js/m2s.js",
    "revision": "69966993dcaa992731719f05164cedaf"
  }, {
    "url": "dictionary_js/loader.js",
    "revision": "93477497a1c1e56deed06cd76afabcc2"
  }, {
    "url": "dictionary_js/inflections_replace.js",
    "revision": "ebc1da5fa2613f95328aa5694a7d6b4a"
  }, {
    "url": "dictionary_js/inflections_new.js",
    "revision": "81436ed7eed2eb77c6523cfb32a61817"
  }, {
    "url": "dictionary_js/inflections.js",
    "revision": "fdc081999a98c35f7d7404e02f6e58bd"
  }, {
    "url": "dictionary_js/foma_apply_down.js",
    "revision": "58e1a0e5e95589e8938964ff4b32332d"
  }, {
    "url": "dictionary_js/entryFinder.js",
    "revision": "d56337705e578d3aea54dc376277db62"
  }, {
    "url": "dictionary_js/displayWords.js",
    "revision": "f0bdf64611988d3d8c9e3b27fe6118c9"
  }, {
    "url": "dictionary_js/cyrillic_convert.js",
    "revision": "f41940642f1dc2cb1ba0cdb3a0c0b6e2"
  }, {
    "url": "dictionary_js/citation_abbreviations.js",
    "revision": "4fc432a3746d705a30aca3a583f6a9f5"
  }, {
    "url": "dictionary_js/categories.js",
    "revision": "9d956fdaee72f066e22352163e2c218f"
  }, {
    "url": "dictionary_js/buttonSearch.js",
    "revision": "e4772617b327c863436a205fa7a4a0bd"
  }, {
    "url": "dictionary_js/bases62625.js",
    "revision": "06314f121c1bb79094c19c8b1420efc5"
  }, {
    "url": "dictionary_js/bases52125.js",
    "revision": "19f72a30eb0782f31deff2ed686f2fa6"
  }, {
    "url": "dictionary_js/bases.js",
    "revision": "72445629d4d218fb6afacbac33334536"
  }, {
    "url": "dictionary_js/autocomplete.js",
    "revision": "329728320cf564bd31d4d05bb650b013"
  }, {
    "url": "dictionary_js/components/nav.js",
    "revision": "cd3db75808dbb869cc859afe3dbd5664"
  }, {
    "url": "dictionary_js/components/footer.js",
    "revision": "d9b60a923a6c7678250d7251d3534098"
  }, {
    "url": "CSS/style_results.css",
    "revision": "06449fef475c3e5555204bae9d34f522"
  }, {
    "url": "CSS/style_entry.css",
    "revision": "8d971dad1155bea836492d82d981cff2"
  }, {
    "url": "CSS/style_dictionary.css",
    "revision": "241174174cc29119915bebd2b32f285d"
  }, {
    "url": "CSS/style_contact.css",
    "revision": "4645ddf433b02ec9e0a70af4b68a64bf"
  }, {
    "url": "CSS/style_about.css",
    "revision": "99e741d5b6e3d570976bc34fea7a733a"
  }], {
    "ignoreURLParametersMatching": [/^utm_/, /^fbclid$/, /^search$/, /^lang$/]
  });

}));
//# sourceMappingURL=sw.js.map
