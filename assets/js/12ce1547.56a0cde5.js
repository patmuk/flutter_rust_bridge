"use strict";(self.webpackChunkflutter_rust_bridge=self.webpackChunkflutter_rust_bridge||[]).push([[3509],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=a(4783);const l={},i="Dart Opaque",s={unversionedId:"guides/contributing/submodules/dart-opaque",id:"guides/contributing/submodules/dart-opaque",title:"Dart Opaque",description:"Design",source:"@site/docs/guides/contributing/submodules/dart-opaque.md",sourceDirName:"guides/contributing/submodules",slug:"/guides/contributing/submodules/dart-opaque",permalink:"/flutter_rust_bridge/guides/contributing/submodules/dart-opaque",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_rust_bridge/tree/master/website/docs/guides/contributing/submodules/dart-opaque.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rust Opaque",permalink:"/flutter_rust_bridge/guides/contributing/submodules/rust-opaque"},next:{title:"Manual",permalink:"/flutter_rust_bridge/manual/"}},p={},u=[{value:"Design",id:"design",level:2},{value:"Safety concern",id:"safety-concern",level:2},{value:"Details of the components",id:"details-of-the-components",level:2},{value:"<code>(Generalized)AutoDropDartPersistentHandle</code>",id:"generalizedautodropdartpersistenthandle",level:3},{value:"<code>GuardedBox</code>, <code>ThreadBox</code>, <code>DartIsolateBox</code>",id:"guardedbox-threadbox-dartisolatebox",level:3},{value:"<code>DartOpaqueNonClone</code>",id:"dartopaquenonclone",level:3},{value:"<code>DartOpaque</code>",id:"dartopaque",level:3},{value:"V1 documentations",id:"v1-documentations",level:2},{value:"Ownership and GC",id:"ownership-and-gc",level:3},{value:"Example",id:"example",level:3},{value:"Case 1: loopBack.",id:"case-1-loopback",level:4},{value:"Case 2: drop.",id:"case-2-drop",level:4},{value:"Case 3: Unwrap.",id:"case-3-unwrap",level:4},{value:"Dispose",id:"dispose",level:3}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dart-opaque"},"Dart Opaque"),(0,r.kt)("h2",{id:"design"},"Design"),(0,r.kt)("p",null,"For completeness, the goal is repeated from the last page:"),(0,r.kt)("admonition",{title:"goal",type:"tip"},(0,r.kt)(o.ZP,{mdxType:"Goal"})),(0,r.kt)("h2",{id:"safety-concern"},"Safety concern"),(0,r.kt)("p",null,"Questions similar to last section can be asked and answered,\nso I do not repeat it here,\nsince the semantics of each component is mentioned below."),(0,r.kt)("h2",{id:"details-of-the-components"},"Details of the components"),(0,r.kt)("h3",{id:"generalizedautodropdartpersistenthandle"},(0,r.kt)("inlineCode",{parentName:"h3"},"(Generalized)AutoDropDartPersistentHandle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct AutoDropDartPersistentHandle(Dart_PersistentHandle);\nimpl Drop for AutoDropDartPersistentHandle { ... }\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Dart_PersistentHandle")," that delete the handle when ",(0,r.kt)("inlineCode",{parentName:"p"},"Drop"),"ped."),(0,r.kt)("h3",{id:"guardedbox-threadbox-dartisolatebox"},(0,r.kt)("inlineCode",{parentName:"h3"},"GuardedBox"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"ThreadBox"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"DartIsolateBox")),(0,r.kt)("p",null,"Take ",(0,r.kt)("inlineCode",{parentName:"p"},"ThreadBox")," as an example. It is equivalent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct ThreadBox<T> { inner: T, thread_id: ThreadId }\nimpl<T> ThreadBox<T> {\n    fn any_method_that_uses_inner_value(&self) {\n        if !self.is_on_creation_thread() { panic!(); }\n        ...\n    }\n}\nunsafe impl<T> Send for ThreadBox<T> {} // and Sync\n")),(0,r.kt)("p",null,'Only allows manipulation at the thread which it is created.\nIt is a "black box" that nobody can open it when it is on another thread.'),(0,r.kt)("p",null,"The inner value can never be (1) used or (2) dropped\non any thread except for the creation thread."),(0,r.kt)("p",null,"Therefore, even though it is ",(0,r.kt)("inlineCode",{parentName:"p"},"Send"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Sync")," among threads,\nit is just a blackbox on all other threads, so we are safe."),(0,r.kt)("h3",{id:"dartopaquenonclone"},(0,r.kt)("inlineCode",{parentName:"h3"},"DartOpaqueNonClone")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct DartOpaqueNonClone {\n    persistent_handle: ThreadBox<GeneralizedAutoDropDartPersistentHandle>,\n    drop_port: SendableMessagePortHandle,\n}\n")),(0,r.kt)("p",null,"Only safe functions. Semantics about Send/Sync are already encapsulated in the ThreadBox."),(0,r.kt)("h3",{id:"dartopaque"},(0,r.kt)("inlineCode",{parentName:"h3"},"DartOpaque")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct DartOpaque {\n    arc: Arc<DartOpaqueNonClone>,\n}\n")),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"Arc")," to make it cloneable."),(0,r.kt)("h2",{id:"v1-documentations"},"V1 documentations"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This section was written for V1, so it may be slightly outdated for V2.")),(0,r.kt)("h3",{id:"ownership-and-gc"},"Ownership and GC"),(0,r.kt)("p",null,"From the moment the opaque type is passed, Rust will own a persistent representation of the dart object (",(0,r.kt)("inlineCode",{parentName:"p"},"Dart_PersistentHandle")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"JsValue"),").\nThis means that while Rust owns ",(0,r.kt)("inlineCode",{parentName:"p"},"DartOpaque")," the object will not be cleared by GC.\nAlso flutter_rust_bridge provides a thread-safe drop for ",(0,r.kt)("inlineCode",{parentName:"p"},"DartOpaque"),": Rust delegates the drop to the Dart side using the Dart port."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("h4",{id:"case-1-loopback"},"Case 1: loopBack."),(0,r.kt)("p",null,"Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"api.rs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn loop_back(opaque: DartOpaque) -> DartOpaque {\n    opaque\n}\n")),(0,r.kt)("p",null,"Dart:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"\nString f() => 'Test_String';\n\nvar fn = await api.loopBack(opaque: f) as String Function();\n\nexpect(fn(), 'Test_String');\n")),(0,r.kt)("h4",{id:"case-2-drop"},"Case 2: drop."),(0,r.kt)("p",null,"Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"api.rs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn sync_accept_dart_opaque(opaque: DartOpaque) -> SyncReturn<String> {\n    drop(opaque);\n    SyncReturn("test".to_owned())\n}\n\npub fn async_accept_dart_opaque(opaque: DartOpaque) {\n    drop(opaque);\n}\n')),(0,r.kt)("p",null,"Dart:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// the closure is safely removed on the Rust side (on another thread)\nawait api.asyncAcceptDartOpaque(opaque: () => 'Test_String');\n// the closure is safely removed on the Rust side (on current thread)\napi.syncAcceptDartOpaque(opaque: () => 'Test_String');\n")),(0,r.kt)("h4",{id:"case-3-unwrap"},"Case 3: Unwrap."),(0,r.kt)("p",null,"Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"api.rs"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'/// [DartWrapObject] can be safely retrieved on a dart thread.\npub fn unwrap_dart_opaque(opaque: DartOpaque) -> SyncReturn<String> {\n    let handle = opaque.try_unwrap().unwrap();\n    SyncReturn("Test".to_owned())\n}\n\n/// [DartWrapObject] cannot be obtained \n/// on a thread other than the thread it was created on.\npub fn panic_unwrap_dart_opaque(opaque: DartOpaque) {\n    let handle = opaque.try_unwrap().unwrap();\n}\n')),(0,r.kt)("p",null,"Dart:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// Rust gets (drop safely) wrap Dart_PersistentHandler (or JsValue).\napi.unwrapDartOpaque(opaque: () => 'Test_String');\n\n// We get an error because DartOpaque was passed to another thread.\nawait expectLater(() => api.panicUnwrapDartOpaque(opaque: () => 'Test_String'), throwsA(isA<FfiException>()));\n")),(0,r.kt)("h3",{id:"dispose"},"Dispose"),(0,r.kt)("p",null,"If there is an attempt to delegate the drop to the Dart side after the drop port (RustApi.dispose()) has been closed,\nflutter_rust_bridge will issue a warning in the logs, the memory behind the object will leak."),(0,r.kt)("p",null,"However, this should not happen, because RustApi itself usually live for the whole application lifetime,\nand there is no need to dispose it."))}c.isMDXComponent=!0},4783:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={toc:[]};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The unsafe code should be carefully encapsulated, as minimal as possible,\nand have a clearly defined and easily checkable semantics.\nEach component should be focused on one clear thing only ("single-responsibility rule").'),(0,r.kt)("li",{parentName:"ul"},"No matter how users use or mis-use it, it should be safe (e.g. no undefined behavior).\nSafety and soundness is critical.")))}l.isMDXComponent=!0}}]);