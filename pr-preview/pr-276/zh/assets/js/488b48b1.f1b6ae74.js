"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4804],{3905:function(e,n,A){A.d(n,{Zo:function(){return d},kt:function(){return c}});var t=A(7294);function a(e,n,A){return n in e?Object.defineProperty(e,n,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[n]=A,e}function s(e,n){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),A.push.apply(A,t)}return A}function r(e){for(var n=1;n<arguments.length;n++){var A=null!=arguments[n]?arguments[n]:{};n%2?s(Object(A),!0).forEach((function(n){a(e,n,A[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):s(Object(A)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(A,n))}))}return e}function i(e,n){if(null==e)return{};var A,t,a=function(e,n){if(null==e)return{};var A,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)A=s[t],n.indexOf(A)>=0||(a[A]=e[A]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)A=s[t],n.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(a[A]=e[A])}return a}var l=t.createContext({}),o=function(e){var n=t.useContext(l),A=n;return e&&(A="function"==typeof e?e(n):r(r({},n),e)),A},d=function(e){var n=o(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var A=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=o(A),c=a,h=u["".concat(l,".").concat(c)]||u[c]||p[c]||s;return A?t.createElement(h,r(r({ref:n},d),{},{components:A})):t.createElement(h,r({ref:n},d))}));function c(e,n){var A=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=A.length,r=new Array(s);r[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var o=2;o<s;o++)r[o]=A[o];return t.createElement.apply(null,r)}return t.createElement.apply(null,A)}u.displayName="MDXCreateElement"},3472:function(e,n,A){A.r(n),A.d(n,{assets:function(){return l},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return o}});var t=A(3117),a=(A(7294),A(3905));const s={sidebar_label:"Node API"},r="Celestia Node API Docs",i={unversionedId:"developers/node-api",id:"developers/node-api",title:"Celestia Node API Docs",description:"This is the Celestia Node API Docs reference page for being able to make API",source:"@site/docs/developers/node-api.md",sourceDirName:"developers",slug:"/developers/node-api",permalink:"/pr-preview/pr-276/zh/developers/node-api",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/node-api.md",tags:[],version:"current",frontMatter:{sidebar_label:"Node API"},sidebar:"developers",previous:{title:"Celestia Node Metrics",permalink:"/pr-preview/pr-276/zh/developers/celestia-node-metrics"},next:{title:"Rollmint",permalink:"/pr-preview/pr-276/zh/developers/rollmint"}},l={},o=[{value:"Endpoints",id:"endpoints",level:2},{value:"Header endpoints",id:"header-endpoints",level:3},{value:"GET /header/{height}",id:"get-headerheight",level:4},{value:"Share endpoints",id:"share-endpoints",level:3},{value:"GET /namespaced_data/{nID}/height/{height}",id:"get-namespaced_datanidheightheight",level:4},{value:"GET /namespaced_shares/{nID}",id:"get-namespaced_sharesnid",level:4},{value:"GET /namespaced_shares/{nID}/height/{height}",id:"get-namespaced_sharesnidheightheight",level:4},{value:"State endpoints",id:"state-endpoints",level:3},{value:"GET /head",id:"get-head",level:4},{value:"GET /data_available/{height}",id:"get-data_availableheight",level:4},{value:"GET /balance",id:"get-balance",level:4},{value:"GET /balance/{address}",id:"get-balanceaddress",level:4},{value:"POST /submit_tx",id:"post-submit_tx",level:4},{value:"POST /submit_pfd",id:"post-submit_pfd",level:4}],d={toc:o};function p(e){let{components:n,...A}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,A,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"celestia-node-api-docs"},"Celestia Node API Docs"),(0,a.kt)("p",null,"This is the Celestia Node API Docs reference page for being able to make API\nrequests to your Celestia Node."),(0,a.kt)("p",null,"In order to query the API, you will need to setup your node. Resources on\nhow to do this can be found in the following ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-276/zh/nodes/validator-node#deploy-the-celestia-node"},"guide"),"."),(0,a.kt)("h2",{id:"endpoints"},"Endpoints"),(0,a.kt)("h3",{id:"header-endpoints"},"Header endpoints"),(0,a.kt)("h4",{id:"get-headerheight"},"GET /header/{height}"),(0,a.kt)("p",null,"Returns the header of the given height."),(0,a.kt)("p",null,"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://<ip-address>:26658/header/300\n")),(0,a.kt)("p",null,"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "header":{\n      "version":{\n         "block":11\n      },\n      "chain_id":"devnet-2",\n      "height":300,\n      "time":"2021-11-23T13:13:21.208225643Z",\n      "last_block_id":{\n         "hash":"7BA28942BB87007324F0332BEB4B3FA57F63BB6FA424B3281D28DFB237AE1A01",\n         "parts":{\n            "total":1,\n            "hash":"5FE2802B7A4D9A0281011401640BFC64854683168BD0FBEC04EFC8065CBE8EA0"\n         }\n      },\n      "last_commit_hash":"82E20D9E023C5B27A71D8AC5FAB8B8BEEAFE735E880386C899D7DE24D3735102",\n      "data_hash":"7B578B351B1B0BBD70BB350019EBC964C44A140A37EF715B552A7F8F315ACD19",\n      "validators_hash":"7F4EA93A134DEDBDA6A1FDD30D05760DD98A2B5FBA95DB3EFFFE7FCE4B361855",\n      "next_validators_hash":"7F4EA93A134DEDBDA6A1FDD30D05760DD98A2B5FBA95DB3EFFFE7FCE4B361855",\n      "consensus_hash":"048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",\n      "app_hash":"528DBBF7330CF30BFAD76EDB1E19935D9CBD7AE522E1D4CC51A6FF0B58ABB72E",\n      "last_results_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n      "evidence_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n      "proposer_address":"31711F367349D1BD619BD0A39568A69614B8A048"\n   },\n   "commit":{\n      "height":300,\n      "round":0,\n      "block_id":{\n         "hash":"D63D40F570E90E5757AD72DA6EB839B9B47E78AB760FFBDF0275CBC6B9A74D30",\n         "parts":{\n            "total":1,\n            "hash":"676A9F3EA11F828E58F44C600762FD09C4DE95611FD1EF8522A3198D29B8B1C9"\n         }\n      },\n      "signatures":[\n         {\n            "block_id_flag":2,\n            "validator_address":"03F1044A6DF782189C7061FF89146B3D33608F17",\n            "timestamp":"2021-11-23T13:13:36.603550499Z",\n            "signature":"/14ReW+Ig0xf8Ew4SE2WtaCWnaWcB+RHsIosjo+uJUfANhceVVpQtCfO2wQtjtPk/JIBcoq/XcomkqsbOlYwBA=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"04881EB0A0A4C1DB414C708249CEEC2FCF348F3E",\n            "timestamp":"2021-11-23T13:13:36.60149343Z",\n            "signature":"XesoBDBgX1eJDIuVmcQIHIKqDTKZdSCMNcWjdk3xeiTgVNB5TYGlO6n7UUAZE5Gf4OZoOzqPPo847VERdWcgBQ=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"31711F367349D1BD619BD0A39568A69614B8A048",\n            "timestamp":"2021-11-23T13:13:36.602220136Z",\n            "signature":"rqpLcPFCFOOBRDB1Uxc9v+6i/GEoFMBIlJlYgFGWtWFSTu4Btr4ByyjRMo9tO9LIIlLW8guyHNS0+2i6ZcuRCg=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"5A253EC2A9AB20AFD48C7BED2AFCA53F5C80BCA6",\n            "timestamp":"2021-11-23T13:13:36.673438724Z",\n            "signature":"MofRin9HeWVw8ENHIdakr4PBN/Vsf1KeeZxFNW4KAJT6rYJKlTSCIGtfTcGgZgA5B2xyqW2aItQ+NAx/uVoPAg=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"79BEB39F4B396F9278DA03F1C97F9BE3B10B12D3",\n            "timestamp":"2021-11-23T13:13:36.607283878Z",\n            "signature":"/3VQESw+WIxWFgy9VnhSikzkr4qs36ZwSx9oweUnov7Gu/NgdnF94vm560YsObV6ZwN5h3xg7JQp1H+xgfOUCQ=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"7F1105B7B219481810C49730AECB1A83036BCA3A",\n            "timestamp":"2021-11-23T13:13:36.644589313Z",\n            "signature":"pj7uUGGZRDy2P2DsBcVUXZP50tDEpmm5bDen2B0ede8GgcNI8VjfZJKAx8ptps8TJrsThDTQdq6cx2Jj6jfuCA=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"87265CC17922E01497F40B701EC9F05373B83467",\n            "timestamp":"2021-11-23T13:13:36.605958421Z",\n            "signature":"dWHenir11St4TAVNp/yPY+GQSBVypMRulP3wHbWIoZILMzfcirxjfTqlM+0FLtO5B8TNcrk9y9FofBJkcsB/BA=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"D345D62BBD18C301B843DF7C65F10E57AB17BD98",\n            "timestamp":"2021-11-23T13:13:36.609916618Z",\n            "signature":"nOHLUTES3ZHJWGL5C0OW8qJR6Vhn2Ru8TQn2FHCaEnksOqtbehz/9+gZhoTndQHmpI6vQzCXHJc8GoxufYb0Aw=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"DEC2642E786A941511A401090D21621E7F08A36D",\n            "timestamp":"2021-11-23T13:13:36.602919116Z",\n            "signature":"EzKh/zkc+ghJhlkmiqldSdWDfTm4NRfZ/rT58sfAa8cNCztGm0ysCaCItTb88qJzDtB/HsdfWuvjkGezKRiACw=="\n         }\n      ]\n   },\n   "validator_set":{\n      "validators":[\n         {\n            "address":"03F1044A6DF782189C7061FF89146B3D33608F17",\n            "pub_key":"sMcFgSIzlD77eZYgV7H4akyxoHCPc2oIQW05qWEB6b4=",\n            "voting_power":5000,\n            "proposer_priority":-40000\n         },\n         {\n            "address":"04881EB0A0A4C1DB414C708249CEEC2FCF348F3E",\n            "pub_key":"WdqZ8hoyc1HxZCJfQrAGKm2fFJZFg7PngPNGkA1RWXc=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"31711F367349D1BD619BD0A39568A69614B8A048",\n            "pub_key":"pvwSRksq3ekXIiYK7IzjQJ870BxLqEma8zRr9n9VnXI=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"5A253EC2A9AB20AFD48C7BED2AFCA53F5C80BCA6",\n            "pub_key":"RnmnTlKoKxNoh2TpohBDP3cKlx4ATiPOCvQFk/6xpUU=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"79BEB39F4B396F9278DA03F1C97F9BE3B10B12D3",\n            "pub_key":"oh/N+GOIennBOAa/gPNCso1mDlqaHQNn7Op/X8opbeY=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"7F1105B7B219481810C49730AECB1A83036BCA3A",\n            "pub_key":"Ow/AHP/Q3guPGymUKpvhnwae+QoCOpGztpVnP179IG8=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"87265CC17922E01497F40B701EC9F05373B83467",\n            "pub_key":"MNi0Z+uNF5X1Bxj988IDXVl0BKUcLs7LItoMnX6dbg4=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"D345D62BBD18C301B843DF7C65F10E57AB17BD98",\n            "pub_key":"4g3hhdyU4IIgWW/4sR0nax8bsC/M/fDbt1N8s/QanF8=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"DEC2642E786A941511A401090D21621E7F08A36D",\n            "pub_key":"b+Vv6Lcp0bhIjOQncr+OYBHixCvU5+k34y4RqyvpluE=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         }\n      ],\n      "proposer":{\n         "address":"03F1044A6DF782189C7061FF89146B3D33608F17",\n         "pub_key":"sMcFgSIzlD77eZYgV7H4akyxoHCPc2oIQW05qWEB6b4=",\n         "voting_power":5000,\n         "proposer_priority":-40000\n      }\n   },\n   "dah":{\n      "row_roots":[\n         "//////////7//////////uyLCVMJmAItYqbOqgHXm3OwHsq1xQiAX1kZV2Tgcobm",\n         "/////////////////////ykyWNfDJZfigziZC5BN5L00KKuoyDPduwynDywauskL"\n      ],\n      "column_roots":[\n         "//////////7//////////uyLCVMJmAItYqbOqgHXm3OwHsq1xQiAX1kZV2Tgcobm",\n         "/////////////////////ykyWNfDJZfigziZC5BN5L00KKuoyDPduwynDywauskL"\n      ]\n   }\n}\n')),(0,a.kt)("h3",{id:"share-endpoints"},"Share endpoints"),(0,a.kt)("h4",{id:"get-namespaced_datanidheightheight"},"GET /namespaced_data/{nID}/height/{height}"),(0,a.kt)("p",null,"Returns original messages of the given namespace ID ",(0,a.kt)("inlineCode",{parentName:"p"},"nID")," from the given block height."),(0,a.kt)("p",null,"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://<ip>:26658/namespaced_data/0c204d39600fddd3/height/182038\n")),(0,a.kt)("p",null,"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "data":[\n      "8fIMqAB+kQo7+LLmHaDya8oH73hxem6lQWX1"\n   ],\n   "height":182038\n}\n')),(0,a.kt)("h4",{id:"get-namespaced_sharesnid"},"GET /namespaced_shares/{nID}"),(0,a.kt)("p",null,"Returns shares of the given namespace ID ",(0,a.kt)("inlineCode",{parentName:"p"},"nID")," from the latest block (chain head)."),(0,a.kt)("p",null,"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://<ip>:26658/namespaced_shares/0c204d39600fddd3\n")),(0,a.kt)("p",null,"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "shares":[\n      "DCBNOWAP3dMb8fIMqAB+kQo7+LLmHaDya8oH73hxem6lQWX1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="\n   ],\n   "height":2452\n}\n')),(0,a.kt)("h4",{id:"get-namespaced_sharesnidheightheight"},"GET /namespaced_shares/{nID}/height/{height}"),(0,a.kt)("p",null,"Returns shares of the given namespace ID ",(0,a.kt)("inlineCode",{parentName:"p"},"nID")," from the block of the given\nheight ",(0,a.kt)("inlineCode",{parentName:"p"},"height"),"."),(0,a.kt)("p",null,"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://<ip-address>:26658/namespaced_shares/0c204d39600fddd3/height/2452\n")),(0,a.kt)("p",null,"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "shares":[\n      "DCBNOWAP3dMb8fIMqAB+kQo7+LLmHaDya8oH73hxem6lQWX1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="\n   ],\n   "height":2452\n}\n')),(0,a.kt)("h3",{id:"state-endpoints"},"State endpoints"),(0,a.kt)("h4",{id:"get-head"},"GET /head"),(0,a.kt)("p",null,"Returns the tip (head) of the node's current chain."),(0,a.kt)("p",null,"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://<ip>:26658/head\n")),(0,a.kt)("p",null,"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "header":{\n      "version":{\n         "block":11,\n         "app":0\n      },\n      "chain_id":"mamaki",\n      "height":32281,\n      "time":"2022-06-06T14:48:57.070758938Z",\n      "last_block_id":{\n         "hash":"C71A7289E67D0A4C3B9C7B35DE534D9D7B1A9CA968507E08A8CCC1D2D1F2A85C",\n         "parts":{\n            "total":1,\n            "hash":"7EF3C6168F5AD4BA4F71D38D759359745137EEE5E20B9D3BC48A8164DC9FABB7"\n         }\n      },\n      "last_commit_hash":"2587A80B0E50C68CDADDB37646BB21A71DFA4AAE43002942880DBE609B51D3A7",\n      "data_hash":"7E134D5EA9EA6EE04377765775CCBDE7848587AE832E4D37F5D6E6DB50CFAC3E",\n      "validators_hash":"ABD182BE0E866A31A1381E43F87F306609463A5AA8311FF5E6D57CEA98C77FD7",\n      "next_validators_hash":"ABD182BE0E866A31A1381E43F87F306609463A5AA8311FF5E6D57CEA98C77FD7",\n      "consensus_hash":"048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",\n      "app_hash":"02D749BD7A79C35DD5696DA1B74194869893717C3A76AB77C10CD5326201F95E",\n      "last_results_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n      "evidence_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n      "proposer_address":"604377BC74F4F27274825A564761D9875B31AF05"\n   },\n   "commit":{\n      "height":32281,\n      "round":0,\n      "block_id":{\n         "hash":"7E43D3AC65581540DC0F795BC14025D42086492DFDE8AF3361B229B700E8D1D7",\n         "parts":{\n            "total":1,\n            "hash":"00F3A00AC0BC5C781E683918DC890C4EDD4FB1D7E9D77C56304AB07E87EEF96C"\n         }\n      },\n      "signatures":[\n         {\n            "block_id_flag":1,\n            "validator_address":"",\n            "timestamp":"0001-01-01T00:00:00Z",\n            "signature":null\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"94692789BFAB19CEEB36689B7A509063D717DE78",\n            "timestamp":"2022-06-06T14:49:23.14315697Z",\n            "signature":"1hzw5xiIXmqOBv4EUtSbH8SDSnmeCvVFjJ8X5LRFiRsJfYz0xI265hYebYvMpKlSV3gd1A0gZfO3+djy4mkbDA=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"773E2B801BA253394B2A9963C4FE8DE03566D6D2",\n            "timestamp":"2022-06-06T14:49:23.133305419Z",\n            "signature":"88Nc/FcKuikZRCg4igVYoE4uJbKBHj7GQjbKi7rqSfZ5kA0am9moCglsM5sONEhF4xgjoMyA/L+xijXw9dEiBw=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"0B76107110A486E8767FA1997EA0C4B40B7851AF",\n            "timestamp":"2022-06-06T14:49:23.152517011Z",\n            "signature":"FbnZ5GYZd5n4P96lNcDZabAO5Ku4xr1/jxlFZh+4CB+rybEnXMpOhPhryiIb5r+EFOF6oPX3Po+g7chjHsh0CQ=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"46E301E7829AF0CF4C3C91371F6687EE0D5A9B95",\n            "timestamp":"2022-06-06T14:49:23.31013935Z",\n            "signature":"53mM7To7SgNCQTPK0aX8H5HeBuhOEU8fkOJBc+d16KF+8On1qD8Hh2YSxk3ATK9fhBjdsiCVIDSjkGoskEqeAw=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"2F192A85E9117A3C166584F8AB20B315D8788C5E",\n            "timestamp":"2022-06-06T14:49:23.146908495Z",\n            "signature":"jZB/C0X0Q5ovwU5Iy8xGHO79Nugs1fXCGPQcM8Z6ctxk622KPT75tk6V4F4UpmeFH8dZStI/l6uBB/ViFJITDA=="\n         },\n         {\n            "block_id_flag":1,\n            "validator_address":"",\n            "timestamp":"0001-01-01T00:00:00Z",\n            "signature":null\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"1DF34566F0F2781A91DF7035D0C70921CABD901E",\n            "timestamp":"2022-06-06T14:49:23.141170328Z",\n            "signature":"RHYPM2mcjD9/ggauNP2DDBgMPyevFzVQKT5wzlLe87JQGYF439A8nVKqvT2zi4lBX1Qj9Wb9PEcxs87FbDArCg=="\n         },\n...\n}\n')),(0,a.kt)("h4",{id:"get-data_availableheight"},"GET /data_available/{height}"),(0,a.kt)("p",null,"Returns whether data is available at a specific block height and the probability\nthat it is available based on the amount of samples collected."),(0,a.kt)("p",null,"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://<ip>:26658/data_available/25000\n")),(0,a.kt)("p",null,"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "available":true,\n  "probability_of_availability":"0.9899774042423815",\n}\n')),(0,a.kt)("h4",{id:"get-balance"},"GET /balance"),(0,a.kt)("p",null,"Returns the balance of the default account address of the node."),(0,a.kt)("p",null,"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://<ip>:26658/balance\n")),(0,a.kt)("p",null,"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "denom":"utia",\n   "amount":"999995000000000"\n}\n')),(0,a.kt)("h4",{id:"get-balanceaddress"},"GET /balance/{address}"),(0,a.kt)("p",null,"Returns the balance of the given address."),(0,a.kt)("p",null,"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://<ip-address>:26658/balance/celes1vuw7pdcyap2u62x6dyqjdzznlg25jll6jj76d0\n")),(0,a.kt)("p",null,"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "denom":"utia",\n   "amount":"999995000000000"\n}\n')),(0,a.kt)("h4",{id:"post-submit_tx"},"POST /submit_tx"),(0,a.kt)("p",null,"Submits the given transaction to a running instance of celestia-app."),(0,a.kt)("p",null,"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -d \'{"tx": "0A83080AFE070A1A2F7061796D656E742E4D736757697265506179466F724461746112DF070A2C63656C65733133753364376D6E757930327070397A6B337A707165706A66746A66376476727A6E6B6C333271120802020202020202021880042280040202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202326608101220B0429A0DB28AE163D9C1A300B320B19CEF93EC90AE87B4BA7ECF76C0703A9F891A408FA20C490F620B6A02E7FF5FA4139B997969BADE13A5E4F1A35086670FDC71550447A4759D57C844E836947F4BB73039D0E836511F3B1B8D8F1D317248DAF707326608201220B0429A0DB28AE163D9C1A300B320B19CEF93EC90AE87B4BA7ECF76C0703A9F891A408FA20C490F620B6A02E7FF5FA4139B997969BADE13A5E4F1A35086670FDC71550447A4759D57C844E836947F4BB73039D0E836511F3B1B8D8F1D317248DAF707326608401220B0429A0DB28AE163D9C1A300B320B19CEF93EC90AE87B4BA7ECF76C0703A9F891A408FA20C490F620B6A02E7FF5FA4139B997969BADE13A5E4F1A35086670FDC71550447A4759D57C844E836947F4BB73039D0E836511F3B1B8D8F1D317248DAF70732670880011220B0429A0DB28AE163D9C1A300B320B19CEF93EC90AE87B4BA7ECF76C0703A9F891A408FA20C490F620B6A02E7FF5FA4139B997969BADE13A5E4F1A35086670FDC71550447A4759D57C844E836947F4BB73039D0E836511F3B1B8D8F1D317248DAF707186312550A4E0A460A1F2F636F736D6F732E63727970746F2E736563703235366B312E5075624B657912230A210318F208E403FE5881227DD423254DA2BD4C11BAD740820B23DA352EF0E7581E6412040A020801120310904E1A405311CD1C8888C562CAA95BF4FBBD6646604D59D66FDD8E291A1C1B2C5286727464E0B3DD9E7DF38F681E0D7A2A154AED45810B6A59D351DE105D11D9383E0D44"}\'\\\n  http://<ip-address>:26658/submit_tx\n')),(0,a.kt)("p",null,"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "txhash":"63F2F87C2602A2F93585FB23691D17E36F9EA8F47CF50083C88941548F28B588",\n   "codespace":"sdk",\n   "code":30,\n   "raw_log":"block height: 5361, timeout height: 99: tx timeout height",\n   "logs":null,\n   "gas_wanted":10000\n}\n')),(0,a.kt)("h4",{id:"post-submit_pfd"},"POST /submit_pfd"),(0,a.kt)("p",null,"Constructs, signs and submits a PayForData message to a running instance\nof celestia-app. The body of the ",(0,a.kt)("inlineCode",{parentName:"p"},"/submit_pfd")," request should contain the\nhex-encoded ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace_id"),", the hex-encoded ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),", and the ",(0,a.kt)("inlineCode",{parentName:"p"},"gas_limit"),"\nas a uint64."),(0,a.kt)("p",null,"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -d \'{"namespace_id": "0c204d39600fddd3", "data": "f1f20ca8007e910a3bf8b2e61da0f26bca07ef78717a6ea54165f5", "gas_limit": 60000}\'\\\n  http://<ip-address>:26658/submit_pfd\n')),(0,a.kt)("p",null,"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "height":2452,\n   "txhash":"04A79AF9DA62FDB41ACD7D82EB0B9004AE4E4ED603B280A65816560B4F38A999",\n   "data":"12200A1E2F7061796D656E742E4D7367506179466F7244617461526573706F6E7365",\n   "raw_log":"[{\\"msg_index\\":0,\\"events\\":[{\\"type\\":\\"message\\",\\"attributes\\":[{\\"key\\":\\"action\\",\\"value\\":\\"/payment.MsgPayForData\\"}]},{\\"type\\":\\"payfordata\\",\\"attributes\\":[{\\"key\\":\\"signer\\",\\"value\\":\\"celestia1vdjkcetnw35kzvtgxvmxwmnwwaaxuet4xp3hxut6dce8wctsdq6hjwfcxd5xvvmyddsh5mnvvaaq6776xw\\"},{\\"key\\":\\"size\\",\\"value\\":\\"27\\"}]}]}]",\n   "logs":[\n      {\n         "msg_index":0,\n         "events":[\n            {\n               "type":"message",\n               "attributes":[\n                  {\n                     "key":"action",\n                     "value":"/payment.MsgPayForData"\n                  }\n               ]\n            },\n            {\n               "type":"payfordata",\n               "attributes":[\n                  {\n                     "key":"signer",\n                     "value":"celestia1vdjkcetnw35kzvtgxvmxwmnwwaaxuet4xp3hxut6dce8wctsdq6hjwfcxd5xvvmyddsh5mnvvaaq6776xw"\n                  },\n                  {\n                     "key":"size",\n                     "value":"27"\n                  }\n               ]\n            }\n         ]\n      }\n   ],\n   "events":[\n      {\n         "type":"coin_spent",\n         "attributes":[\n            {\n               "key":"spender",\n               "value":"celestia10jhckjxxymsufflglvypxscnmggetwh0gfasws",\n               "index":true\n            },\n            {\n               "key":"amount",\n               "value":"1utia",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"coin_received",\n         "attributes":[\n            {\n               "key":"receiver",\n               "value":"celestia17xpfvakm2amg962yls6f84z3kell8c5lpnjs3s",\n               "index":true\n            },\n            {\n               "key":"amount",\n               "value":"1utia",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"transfer",\n         "attributes":[\n            {\n               "key":"recipient",\n               "value":"celestia17xpfvakm2amg962yls6f84z3kell8c5lpnjs3s",\n               "index":true\n            },\n            {\n               "key":"sender",\n               "value":"celestia10jhckjxxymsufflglvypxscnmggetwh0gfasws",\n               "index":true\n            },\n            {\n               "key":"amount",\n               "value":"1utia",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"message",\n         "attributes":[\n            {\n               "key":"sender",\n               "value":"celestia10jhckjxxymsufflglvypxscnmggetwh0gfasws",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"fee",\n               "value":"1utia",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"acc_seq",\n               "value":"celestia10jhckjxxymsufflglvypxscnmggetwh0gfasws/267",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"signature",\n               "value":"JMNihnKS/MtYJDprqEFGJuXh16tVADsDDxXaFFpvv2te57btl4LbiRzwRRiN2rvwkJ2zlAApu2ImT22MZBi5+A==",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"fee",\n               "value":"",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"acc_seq",\n               "value":"celestia13zx48t96zauht0kpcn0kcfykc9wn8fehzcp9wq/1024",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"signature",\n               "value":"mIZIjbzN0/RQAlQN7TDWzqtey3vVBPe7IO3+IIDhJstIH8QU9vsHfl0Rql9qWMZQG4dM+77w9WmUcnCeS7edfw==",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"fee",\n               "value":"",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"acc_seq",\n               "value":"celestia1h36gnnwzneu0csqzn2waph5y983hf3dkaznlgz/0",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"signature",\n               "value":"sfy+XyP7iWU+V9q3zEIOWxbGihvhzUKRLNVeXP+a+5oRefIA/Pyqfm13A5NU9I27hhfvpqo9vhXW1waRgcI9OA==",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"message",\n         "attributes":[\n            {\n               "key":"action",\n               "value":"/payment.MsgPayForData",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"payfordata",\n         "attributes":[\n            {\n               "key":"signer",\n               "value":"celestia1vdjkcetnw35kzvtgxvmxwmnwwaaxuet4xp3hxut6dce8wctsdq6hjwfcxd5xvvmyddsh5mnvvaaq6776xw",\n               "index":true\n            },\n            {\n               "key":"size",\n               "value":"27",\n               "index":true\n            }\n         ]\n      }\n   ]\n}\n')))}p.isMDXComponent=!0}}]);