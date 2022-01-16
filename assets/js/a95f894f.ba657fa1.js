"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[3395],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2762:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={title:"FAQ"},l=void 0,d={unversionedId:"api/FAQ",id:"api/FAQ",title:"FAQ",description:"The list will be updated/expanded as questions come up, dealing with some common issues that API users find.",source:"@site/docs/api/FAQ.md",sourceDirName:"api",slug:"/api/FAQ",permalink:"/docs/api/FAQ",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/FAQ.md",tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"reference",previous:{title:"Get chain information",permalink:"/docs/api/examples/promise/chain-info"},next:{title:"Overview",permalink:"/docs/substrate"}},p=[{value:"I am getting a &quot;Unknown types found, no types for ...&quot; error",id:"i-am-getting-a-unknown-types-found-no-types-for--error",children:[],level:2},{value:"I am getting a &quot;Metadata:: failed on MagicNumber&quot; error",id:"i-am-getting-a-metadata-failed-on-magicnumber-error",children:[],level:2},{value:"The node returns a &quot;Could not convert&quot; error on send",id:"the-node-returns-a-could-not-convert-error-on-send",children:[],level:2},{value:"I cannot send transactions, sending yields decoding failures",id:"i-cannot-send-transactions-sending-yields-decoding-failures",children:[],level:2},{value:"I would like to sign transactions offline",id:"i-would-like-to-sign-transactions-offline",children:[],level:2},{value:"I would like to send a root transaction",id:"i-would-like-to-send-a-root-transaction",children:[],level:2},{value:"How do I call a function with a Tuple input",id:"how-do-i-call-a-function-with-a-tuple-input",children:[],level:2},{value:"How long do transactions live",id:"how-long-do-transactions-live",children:[],level:2},{value:"My chain does not support system.account queries",id:"my-chain-does-not-support-systemaccount-queries",children:[],level:2},{value:"Using a non-current-master node, I have issues parsing events",id:"using-a-non-current-master-node-i-have-issues-parsing-events",children:[],level:2},{value:"On a non-current, non Substrate 2.0 branch, my balances are wrong",id:"on-a-non-current-non-substrate-20-branch-my-balances-are-wrong",children:[],level:2},{value:"Which API can I use to query by transaction hash?",id:"which-api-can-i-use-to-query-by-transaction-hash",children:[],level:2},{value:"Since upgrading to the 7.x series, TypeScript augmentation is not avilable",id:"since-upgrading-to-the-7x-series-typescript-augmentation-is-not-avilable",children:[],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The list will be updated/expanded as questions come up, dealing with some common issues that API users find."),(0,o.kt)("h2",{id:"i-am-getting-a-unknown-types-found-no-types-for--error"},'I am getting a "Unknown types found, no types for ..." error'),(0,o.kt)("p",null,"There are 2 causes for this, both related to the version of the API that you are using and the support of types. As explained in the elsewhere, types on Polkadot/Substrate are continuously evolving - the latest version of the API always tries to support types for the latest Polkadot networks, such as ",(0,o.kt)("a",{parentName:"p",href:"https://kusama.network/"},"Kusama"),". So for Polkadot public chains, ensure that you are using the latest released API version."),(0,o.kt)("p",null,"If you are connected to a customized chain, you would rather want to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/start/types.extend"},"register the types")," either on your own, or via packages that the chain vendor provides."),(0,o.kt)("p",null,"If however you are running against a master branch of either Polkadot or Substrate, and the type additions are very new and have not made it into an API release yet you may well be better suited running ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/start/install#betas"},"a beta version, tracking master"),"."),(0,o.kt)("h2",{id:"i-am-getting-a-metadata-failed-on-magicnumber-error"},'I am getting a "Metadata:: failed on MagicNumber" error'),(0,o.kt)("p",null,"Update your version of the API to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/start/install"},"latest version"),". Like types, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/start/basics"},"metadata interfaces")," are continuously evolving. For instance with the Polkadot Alexander network, only metadata v3 is available. By the time Kusama launched, this has been bumped to v7. As these versions are added to the Polkadot/Substrate codebase, they are added to the API."),(0,o.kt)("h2",{id:"the-node-returns-a-could-not-convert-error-on-send"},'The node returns a "Could not convert" error on send'),(0,o.kt)("p",null,"The typical error that you would see is ",(0,o.kt)("inlineCode",{parentName:"p"},"Verification Error: Execution(ApiError(\"Could not convert parameter 'tx' between node and runtime"),". This means that the transaction data serialized from the API cannot be deserialized on the node."),(0,o.kt)("p",null,"All data transferred between the API and the Node is in a SCALE-encoded binary format, so the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/start/types.extend"},"definition of the types")," between the API and the node needs to match 100%. When you find the above, it would mean the definition of the types on the API side does not match what is on the node. Specifically the API encodes against the definition, but since there is a mismatch the Node cannot parse the data correctly."),(0,o.kt)("p",null,"To fix this, you should look at the specific ",(0,o.kt)("inlineCode",{parentName:"p"},"api.tx.*")," params and adjust the type definitions for those param types to match what is found on the node side. In some rare cases the cause could be extrinsic formatting related, to track these make an ",(0,o.kt)("inlineCode",{parentName:"p"},"api.tx.system.remark(data: Bytes)")," call, if it fails, the API and node cannot agree on ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/start/types.extend#impact-on-extrinsics"},"an extrinsic format and adjustments are required"),"."),(0,o.kt)("p",null,"Also see the next entry for causes related to wrong ",(0,o.kt)("inlineCode",{parentName:"p"},"Address")," formats."),(0,o.kt)("h2",{id:"i-cannot-send-transactions-sending-yields-decoding-failures"},"I cannot send transactions, sending yields decoding failures"),(0,o.kt)("p",null,"Depending on the chain, you could get either an ",(0,o.kt)("inlineCode",{parentName:"p"},"Address")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Signature")," or extensions decoding error when sending the transaction returned from the node. This is due to a type mismatch on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Address")," types defined on the node vs what the API uses. This is not something the API can detect via the metadata and it is generally configured on a per-chain basis."),(0,o.kt)("p",null,"The API always injects the default type definitions as specified by the Substrate master fully-featured node. This means that any customizations to chains needs to be applied as types, should there be differences in specific user-implementations."),(0,o.kt)("p",null,"Due to these customizations and differences that bleed through to the transaction formats, out-of-the-box chains based on the node-template will have issues when sending transactions. To fix this, you would need to add ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/start/types.extend#impact-on-extrinsics"},"the customized Address types into your API")," instances (or UIs), allowing the API to have the information required to adjust the encoding."),(0,o.kt)("p",null,"There are 3 ",(0,o.kt)("inlineCode",{parentName:"p"},"Address")," types that are generally configured in different chains, and one variant should be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Api.create({ ... })")," ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/api/start/types.extend/#extension"},"options as types")," -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"type Address = MultiAddress")," (Rust), this is the current default in Substrate master and the API and used in chains such as Polkadot/Kusama from runtime 28. It allows an enhancement to the original ",(0,o.kt)("inlineCode",{parentName:"p"},"Indices")," lookup, catering for a wide array of address types. To configure this type in the API, use ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "Address": "MultiAddress", "LookupSource": "MultiAddress" }'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"type Address = <Indices as StaticLookup>::Source")," (Rust), this is the previous the default as applied in the API and yields types ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "Address": "IndicesLookupSource", "LookupSource": "IndicesLookupSource" }')," when explicitly specified;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"type Address = AccountId")," (Rust), this is used in a number of chains such as Kusama/Polkadot (prior to the 28 runtime) and a previous default for the node-template chain as well. To override to this type of Address, use the API types ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "Address": "AccountId", "LookupSource": "AccountId" }')))),(0,o.kt)("p",null,"The above may also apply when when you use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps"},"polkadot-js/apps")," to connect to your node. Known chains are correctly configured, however any custom chain may need additional types."),(0,o.kt)("h2",{id:"i-would-like-to-sign-transactions-offline"},"I would like to sign transactions offline"),(0,o.kt)("p",null,"The API itself is independent on where the signature comes from and how it is injected. Additionally it implements a signer interface, that can be used for external signing - an example of this is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps"},"polkadot-js/apps")," support for signing via extensions and even the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/extension"},"polkadot-js/extension")," support for tools such as the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-signer"},"Parity Signer"),"."),(0,o.kt)("p",null,"As of this writing we don't have an explicit example of implementing the signer interface in these docs, although we do use one in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/api/blob/master/packages/api/test/util/SingleAccountSigner.ts"},"our tests"),". Additionally, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/tools"},"polkadot-js/tools")," has an implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/tools/tree/master/packages/signer-cli"},"a very basic offline signer")," where transactions are generated in one process and signatures in another non-connected process."),(0,o.kt)("h2",{id:"i-would-like-to-send-a-root-transaction"},"I would like to send a root transaction"),(0,o.kt)("p",null,"Some calls in Polkadot/Substrate can only be submitted as root, these are indicated by ",(0,o.kt)("inlineCode",{parentName:"p"},"ensure_root(origin)")," in the Rust codebase. Root here does not refer to the actual account, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"//Alice")," on  a ",(0,o.kt)("inlineCode",{parentName:"p"},"--dev")," chain, but rather that it cannot be submitted as a bare user transaction. This restriction applies to chain upgrades, changing balances or anything that modifies the state and/or chain operation."),(0,o.kt)("p",null,"To submit these transactions, it needs to be send as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/start/api.tx.wrap#sudo-use"},"wrapped transaction")," via either ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo.sudo")," (assuming you have access on your chain) or ",(0,o.kt)("inlineCode",{parentName:"p"},"democracy.proposal")," (which would allow users of the chain to vote on it)."),(0,o.kt)("h2",{id:"how-do-i-call-a-function-with-a-tuple-input"},"How do I call a function with a Tuple input"),(0,o.kt)("p",null,"Tuples, as defined in the Polkadot/Substrate types appear as ",(0,o.kt)("inlineCode",{parentName:"p"},"(TypeA, TypeB)"),". For instance we may have an ",(0,o.kt)("inlineCode",{parentName:"p"},"(AccountId, u64)")," input as defined in the metadata or as part of the user types. To specify a Tuple as an input, wrap it in an  array format, for instance to call ",(0,o.kt)("inlineCode",{parentName:"p"},"query.module.get((u32, u64))")," where a ",(0,o.kt)("inlineCode",{parentName:"p"},"(u32, u64)")," Tuple input is expected, you would do  ",(0,o.kt)("inlineCode",{parentName:"p"},"query.module.get([123, 456])")),(0,o.kt)("h2",{id:"how-long-do-transactions-live"},"How long do transactions live"),(0,o.kt)("p",null,"Polkadot/Substrate supports both immortal and mortal transactions. For immortal, this means that the transaction has an infinite lifetime, for mortals, the transactions expire after a defined period. By default the API sends mortal transactions when no explicit extrinsic era has been specified. This means that all transaction has a limited lifetime and will expire if not included in the period set."),(0,o.kt)("p",null,"The length for this transaction validity is set to 5 minutes, calculated based on the blocktime for the chain. (10 blocks per minute in this default 6s Substrate configuration)."),(0,o.kt)("h2",{id:"my-chain-does-not-support-systemaccount-queries"},"My chain does not support system.account queries"),(0,o.kt)("p",null,"The API always tracks the latest Substrate master in terms of examples. This means that nonce & balance queries are done via the ",(0,o.kt)("inlineCode",{parentName:"p"},"api.query.system.account(<account>)")," which returns a struct ",(0,o.kt)("inlineCode",{parentName:"p"},"{ nonce: Index, data: AccountData }")," where the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," is struct containing the free and reserved balances. As with all ",(0,o.kt)("inlineCode",{parentName:"p"},"api.query.*")," endpoints, this is decorated based on what the chain you connect to support, via the metadata exchange."),(0,o.kt)("p",null,"It is possible that you are connecting to an older chain that has not been upgraded yet. For these chains, this storage entry won't be available (yet). To query the nonce on older chains, you can do a query to ",(0,o.kt)("inlineCode",{parentName:"p"},"api.query.system.accountNonce(<account>)")," and balances can be retrieved via ",(0,o.kt)("inlineCode",{parentName:"p"},"api.query.balances.freeBalance(<account>)"),"."),(0,o.kt)("p",null,"Likewise, if your chain has been upgraded recently and you are still using the old ",(0,o.kt)("inlineCode",{parentName:"p"},"system.accountNonce")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"balances.freeBalance")," queries in your code (which is now not available in the chain metadata), you need to update it to query the new location."),(0,o.kt)("h2",{id:"using-a-non-current-master-node-i-have-issues-parsing-events"},"Using a non-current-master node, I have issues parsing events"),(0,o.kt)("p",null,"Recently Substrate master updated the ",(0,o.kt)("inlineCode",{parentName:"p"},"Weight")," type from ",(0,o.kt)("inlineCode",{parentName:"p"},"u32")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"u64"),". This type is used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"DispatchInfo")," struct in the ",(0,o.kt)("inlineCode",{parentName:"p"},"system.ExtrinsicSuccess")," events, to return the applied call weights as well as the resulting fees. Since the API master branch tracks Substrate master, this means the change has been applied by default, with the default set to ",(0,o.kt)("inlineCode",{parentName:"p"},"u64"),"."),(0,o.kt)("p",null,"If you are on a chain that has not been upgraded yet, you need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"Weight: 'u32'")," to your types to allow for successful parsing of all events. Without this override, parsing will fail. As soon as one event in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Vec<EventRecord>")," structure from ",(0,o.kt)("inlineCode",{parentName:"p"},"system.events")," fails to parse, all subsequent events are affected and the decoding will return an error."),(0,o.kt)("h2",{id:"on-a-non-current-non-substrate-20-branch-my-balances-are-wrong"},"On a non-current, non Substrate 2.0 branch, my balances are wrong"),(0,o.kt)("p",null,"As part of the Substrate 2.0 release, the ",(0,o.kt)("inlineCode",{parentName:"p"},"RefCount")," type has been changed from ",(0,o.kt)("inlineCode",{parentName:"p"}," u8")," to a ",(0,o.kt)("inlineCode",{parentName:"p"},"u32"),". Since the API always track latest Substrate, this change has been applied by default. The impact of this type is that it is used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountInfo")," type which is returned from ",(0,o.kt)("inlineCode",{parentName:"p"},"system.account"),", which, in turn, tracks balances."),(0,o.kt)("p",null,"If on an older version of the chain, apply the older type via ",(0,o.kt)("inlineCode",{parentName:"p"},"RefCount: 'u8'")," to your types."),(0,o.kt)("h2",{id:"which-api-can-i-use-to-query-by-transaction-hash"},"Which API can I use to query by transaction hash?"),(0,o.kt)("p",null,'There is no such API. Substrate does not expose a "query-by-tx-hash" RPC, nor are transactions indexed by hash on the Substrate node. The reason for this is that transaction hashes are non-unique across the chain, although they will generally be unique inside a block.'),(0,o.kt)("p",null,"For more information around this, refer to the Polkadot wiki ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/en/build-protocol-info#unique-identifiers-for-extrinsics"},"on unique extrinsic identifiers"),"."),(0,o.kt)("h2",{id:"since-upgrading-to-the-7x-series-typescript-augmentation-is-not-avilable"},"Since upgrading to the 7.x series, TypeScript augmentation is not avilable"),(0,o.kt)("p",null,"This could manifest in various ways,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"query results may just be ",(0,o.kt)("inlineCode",{parentName:"li"},"Codec")," instead of the actual expected type"),(0,o.kt)("li",{parentName:"ul"},"dependent packages, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"api-derive")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"api-contract")," may yield TS errors")),(0,o.kt)("p",null,"For TS users, since the 7.x release, type augmentation is not applied automatically anymore. Historically Substrate-specific types and endpoints were typed, which worked in 95% of cases, until any module was changed from default Substrate behavior or types were extended or adjustsed from what Substrate exposes. This resulted in any type overrides working in some cases and returning type errors in other critical areas."),(0,o.kt)("p",null,"In the 7.x series, overrides are to be explicitly applied anymore. For a basic example to restore Substrate-only types like in erealier versions, an ",(0,o.kt)("inlineCode",{parentName:"p"},"import '@polkadot/api-augment'")," is to be applied to your codebase entry point before any imports from the API itself. The various shipped aliases available are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import '@polkadot/api-augment/substrate'")," - same as the ",(0,o.kt)("inlineCode",{parentName:"li"},"@polkadot/api-augment")," form, the default (and what was applied before the 7.x release)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import '@polkadot/api-augment/kusama'")," - applies Kusama types and endpoint augmentation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import '@polkadot/api-augment/polkadot'")," - applies Polkadot types and endpoint augmentation")),(0,o.kt)("p",null,"For non-Kusama/Polkadot chains, the above should be skipped completely and only the augmentation for the specific chain, as published by the teams themselves and generated via the ",(0,o.kt)("inlineCode",{parentName:"p"},"typegen")," package, should be imported."),(0,o.kt)("p",null,"Internally the ",(0,o.kt)("inlineCode",{parentName:"p"},"api-augment")," when included applies 3 augmentations based on the option requested -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"applies all tx, query, const, event endpoints for the specific chain"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import '@polkadot/rpc-augment'")," - to decorate all RPC endpoints with defaults for Substrate"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import '@polkadot/types-augment'")," - applying all generic Substrate types, this follds up and includes",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import '@polkadot/types-augment/lookup'")," for Substrate/Kusama/Polkadot lookup types"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"import '@polkadot/types-augment/registry'")," for Substrate-specific registry types")))),(0,o.kt)("p",null,"The above breakdown could be useful to tweak and include ",(0,o.kt)("em",{parentName:"p"},"some")," types, while excluding others."))}c.isMDXComponent=!0}}]);